'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { loginAction, type LoginFormState } from '@/app/actions/auth';

const initialState: LoginFormState = {};

type Props = {
  redirectTo?: string;
};

export function LoginForm({ redirectTo = '/portal' }: Props) {
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <form className="mt-8 space-y-4" action={formAction} aria-label="Formulário de login">
      <input type="hidden" name="redirectTo" value={redirectTo} />

      <label className="block text-sm font-semibold text-olibano-forest/80">
        Usuário ou e-mail
        <input
          required
          name="email"
          type="email"
          placeholder="voce@olibano.com"
          className="mt-2 w-full rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-olibano-forest focus:border-olibano-terracotta focus:outline-none focus:ring-2 focus:ring-olibano-terracotta/40"
        />
      </label>
      <label className="block text-sm font-semibold text-olibano-forest/80">
        Senha
        <input
          required
          minLength={6}
          name="password"
          type="password"
          placeholder="********"
          className="mt-2 w-full rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-olibano-forest focus:border-olibano-terracotta focus:outline-none focus:ring-2 focus:ring-olibano-terracotta/40"
        />
      </label>

      {state.error && (
        <p className="rounded-2xl bg-olibano-terracotta/10 px-4 py-3 text-sm text-olibano-terracotta" role="alert" aria-live="polite">
          {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-2xl bg-gradient-to-r from-olibano-gold to-olibano-terracotta py-3 font-semibold uppercase tracking-[0.4em] text-olibano-forest/90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? 'Autenticando...' : 'Autenticar acesso'}
    </button>
  );
}
