import { cookies } from 'next/headers';
import type { NextRequest, NextResponse } from 'next/server';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

import type { Database } from './types';

type CookieAdapter = {
  get?: (name: string) => Promise<string | null | undefined> | string | null | undefined;
  set?: (name: string, value: string, options: CookieOptions) => Promise<void> | void;
  remove?: (name: string, options: CookieOptions) => Promise<void> | void;
};

const getSupabaseCredentials = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  }

  return { url, anonKey } as const;
};

const createServerSupabaseClient = (adapter: CookieAdapter): SupabaseClient<Database> => {
  const { url, anonKey } = getSupabaseCredentials();
  return createServerClient<Database>(url, anonKey, {
    cookies: adapter,
  });
};

export const getServerComponentClient = (): SupabaseClient<Database> => {
  const cookieStore = cookies() as unknown as {
    get: (name: string) => { value: string } | undefined;
  };
  return createServerSupabaseClient({
    get: (name) => cookieStore.get(name)?.value,
  });
};

export const getServerActionClient = (): SupabaseClient<Database> => {
  const cookieStore = cookies() as unknown as {
    get: (name: string) => { value: string } | undefined;
    set?: (options: { name: string; value: string } & CookieOptions) => void;
    delete?: (options: { name: string } & CookieOptions) => void;
  };
  return createServerSupabaseClient({
    get: (name) => cookieStore.get(name)?.value,
    set: (name, value, options) => {
      cookieStore.set?.({ name, value, ...options });
    },
    remove: (name, options) => {
      cookieStore.delete?.({ name, ...options });
    },
  });
};

export const getRouteHandlerClient = (
  req: NextRequest,
  res: NextResponse,
): SupabaseClient<Database> =>
  createServerSupabaseClient({
    get: (name) => req.cookies.get(name)?.value,
    set: (name, value, options) => {
      res.cookies.set({ name, value, ...options });
    },
    remove: (name, options) => {
      res.cookies.delete({ name, ...options });
    },
  });
