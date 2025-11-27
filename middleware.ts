import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '@/lib/supabase/types';

const PROTECTED_PREFIXES = ['/portal'];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isProtectedRoute = PROTECTED_PREFIXES.some((prefix) => req.nextUrl.pathname.startsWith(prefix));

  if (!session && isProtectedRoute) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/login';
    redirectUrl.search = '';
    redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname + req.nextUrl.search);
    return NextResponse.redirect(redirectUrl);
  }

  if (session && req.nextUrl.pathname === '/login') {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/portal';
    redirectUrl.search = '';
    redirectUrl.searchParams.delete('redirectTo');
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ['/portal/:path*', '/login'],
};
