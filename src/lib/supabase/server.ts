import { cookies } from 'next/headers';
import {
  createRouteHandlerClient,
  createServerActionClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import type { SupabaseClient } from '@supabase/supabase-js';

import type { Database } from './types';

export const getServerComponentClient = (): SupabaseClient<Database> =>
  createServerComponentClient<Database>({ cookies });

export const getServerActionClient = (): SupabaseClient<Database> =>
  createServerActionClient<Database>({ cookies });

export const getRouteHandlerClient = (): SupabaseClient<Database> =>
  createRouteHandlerClient<Database>({ cookies });
