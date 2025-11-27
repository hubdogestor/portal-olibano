import { createBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { SupabaseClient } from '@supabase/supabase-js';

import type { Database } from './types';

let browserClient: SupabaseClient<Database> | undefined;

export const getBrowserClient = (): SupabaseClient<Database> => {
  if (browserClient) return browserClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  }

  browserClient = createBrowserClient<Database>(url, anonKey);
  return browserClient;
};
