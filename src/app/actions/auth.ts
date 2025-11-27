'use server';

import { redirect } from 'next/navigation';

import { getServerActionClient } from '@/lib/supabase/server';

export type LoginFormState = {
  error?: string;
};

const MIN_PASSWORD_LENGTH = 6;

export const loginAction = async (_: LoginFormState, formData: FormData): Promise<LoginFormState> => {
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const redirectTo = String(formData.get('redirectTo') ?? '/portal');

  if (!email || !password) {
    return { error: 'Informe e-mail e senha válidos.' };
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return { error: 'A senha precisa ter ao menos 6 caracteres.' };
  }

  const supabase = await getServerActionClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  const isInternalRedirect = redirectTo.startsWith('/') && !redirectTo.startsWith('//');
  redirect(isInternalRedirect ? redirectTo : '/portal');
};

export const logoutAction = async (): Promise<void> => {
  const supabase = await getServerActionClient();
  await supabase.auth.signOut();
  redirect('/login');
};
