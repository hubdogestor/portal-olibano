'use client';

import { logoutAction } from '@/app/actions/auth';
import { useFormStatus } from 'react-dom';

export function LogoutButton() {
  return (
    <form action={logoutAction} className="inline-flex">
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
      className="rounded-full border border-olibano-ink px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-olibano-ink transition hover:bg-olibano-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? 'Encerrando…' : 'Encerrar sessão'}
    </button>
  );
}
