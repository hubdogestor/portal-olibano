import { cookies } from 'next/headers';
import type { NextRequest, NextResponse } from 'next/server';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

import type { Database } from './types';

const ensureEnv = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  }

  return { url, anonKey } as const;
};

const cookieDefaults = { path: '/' } as const;

type CookieStore = Awaited<ReturnType<typeof cookies>>;
type MutableCookieStore = CookieStore & {
  set?: (name: string, value: string, options?: CookieOptions) => void;
  delete?: (name: string, options?: CookieOptions) => void;
};

const createAdapterFromStore = (store: MutableCookieStore) => ({
  get(name: string) {
    return store.get(name)?.value;
  },
  set(name: string, value: string, options?: CookieOptions) {
    store.set?.(name, value, { ...cookieDefaults, ...(options ?? {}) });
  },
  remove(name: string, options?: CookieOptions) {
    store.delete?.(name, { ...cookieDefaults, ...(options ?? {}) });
  },
});

export const getServerComponentClient = async (): Promise<SupabaseClient<Database>> => {
  const cookieStore = (await cookies()) as MutableCookieStore;
  const { url, anonKey } = ensureEnv();

  return createServerClient<Database>(url, anonKey, {
    cookies: createAdapterFromStore(cookieStore),
  });
};

export const getServerActionClient = async (): Promise<SupabaseClient<Database>> => {
  const cookieStore = (await cookies()) as MutableCookieStore;
  const { url, anonKey } = ensureEnv();

  return createServerClient<Database>(url, anonKey, {
    cookies: createAdapterFromStore(cookieStore),
  });
};

export const getRouteHandlerClient = (
  req: NextRequest,
  res: NextResponse,
): SupabaseClient<Database> => {
  const { url, anonKey } = ensureEnv();

  return createServerClient<Database>(url, anonKey, {
    cookies: {
      get(name) {
        return req.cookies.get(name)?.value;
      },
      set(name, value, options) {
        res.cookies.set({ name, value, ...cookieDefaults, ...options });
      },
      remove(name, options) {
        res.cookies.delete({ name, ...cookieDefaults, ...options });
      },
    },
  });
};
