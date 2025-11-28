import { createClient } from '@supabase/supabase-js';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const parseEnvFile = (relativePath) => {
  const filePath = path.resolve(process.cwd(), relativePath);
  if (!existsSync(filePath)) {
    return {};
  }

  return readFileSync(filePath, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .reduce((acc, line) => {
      const [key, ...rest] = line.split('=');
      if (!key || rest.length === 0) {
        return acc;
      }
      acc[key] = rest.join('=').trim();
      return acc;
    }, {});
};

const envFromFile = {
  ...parseEnvFile('.env'),
  ...parseEnvFile('.env.local'),
};

const getEnv = (key) => process.env[key] ?? envFromFile[key] ?? '';

const email = process.argv[2];

if (!email) {
  console.error('Usage: node scripts/admin/remove-supabase-user.mjs <email>');
  process.exit(1);
}

const supabaseUrl = getEnv('NEXT_PUBLIC_SUPABASE_URL');
const serviceKey = getEnv('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !serviceKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

const client = createClient(supabaseUrl, serviceKey);

async function removeUserByEmail(targetEmail) {
  const normalizedEmail = targetEmail.toLowerCase();
  const { data, error } = await client.auth.admin.listUsers({ page: 1, perPage: 1000 });

  if (error) {
    throw error;
  }

  const user = data?.users.find((candidate) => candidate.email?.toLowerCase() === normalizedEmail);

  if (!user) {
    console.log(`Usuário ${targetEmail} não encontrado.`);
    return;
  }

  const { error: deleteError } = await client.auth.admin.deleteUser(user.id);

  if (deleteError) {
    throw deleteError;
  }

  console.log(`Usuário ${targetEmail} (${user.id}) removido com sucesso.`);
}

removeUserByEmail(email).catch((err) => {
  console.error('Falha ao remover usuário:', err.message);
  process.exit(1);
});
