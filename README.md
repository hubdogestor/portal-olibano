# Portal Olíbano

Portal Olíbano é a nova área logada para distribuir ebooks, trilhas sonoras e experiências das Práticas Integrativas Complementares. O objetivo deste repositório é fornecer um ponto de partida seguro para integrar o Supabase Auth (já configurado) e liberar conteúdos como o Ebook 01 através de `/portal`.

## Stack

- Next.js 16 (App Router + TypeScript)
- Tailwind CSS 4 com tokens customizados da identidade Olíbano
- next/font com Lato e Cormorant Garamond

## Requisitos

- Node.js 18.18+ (recomendado 20 LTS)
- npm 10+

## Configuração

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Copie o arquivo `.env.example` para `.env.local` e preencha com as credenciais do Supabase (Dashboard → Settings → API). Todas as variáveis são obrigatórias:

   ```bash
   cp .env.example .env.local
   ```

3. Preencha:

   - `NEXT_PUBLIC_SUPABASE_URL`: URL do projeto (formato `https://xyz.supabase.co`).
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: chave pública (anon) para chamadas client-side.
   - `SUPABASE_SERVICE_ROLE_KEY`: chave com acesso de serviço (necessária para rotinas administrativas e geração de JWT server-side).
   - `SUPABASE_JWT_SECRET`: segredo JWT disponível na mesma tela, usado para validar sessões no middleware.
   - `NEXT_PUBLIC_PORTAL_URL`: URL pública utilizada em callbacks de e-mail mágica/SSO (ex.: `https://portal.olibanovip.com.br`).

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse `http://localhost:3000/login`. O formulário utiliza ações do servidor (`src/app/actions/auth.ts`) para chamar o Supabase e salvar o cookie. Usuários autenticados são redirecionados automaticamente para `/portal`.

## Scripts adicionais

| Script          | Descrição                                         |
| ---------------- | ------------------------------------------------- |
| `npm run build` | Gera o bundle de produção do Next.js.             |
| `npm run start` | Inicia o servidor já compilado (`npm run build`). |
| `npm run lint`  | Executa o ESLint com a config oficial do Next.js. |
| `npm run format`| Aplica o Prettier em todo o projeto.              |

Commits passam automaticamente por `npm run lint` via Husky (arquivo `.husky/pre-commit`).

## Estrutura principal

- `src/app/login`: tela de login conectada ao Supabase Auth (e-mail + senha) com suporte a redirecionamento.
- `src/app/portal`: home logada, carrega o usuário autenticado e oferece botão de logout.
- `src/app/actions/auth.ts`: ações do servidor (login/logout) reutilizadas por formulários e botões.
- `src/lib/supabase`: clientes compartilhados para browser, componentes do servidor, actions, route-handlers e middleware.
- `src/data/materials.ts`: mock com materiais (Ebook 01, trilhas binaurais, workshops).
- `.env.example`: variáveis esperadas para autenticação e URL pública.
- `middleware.ts`: protege `/portal` (e subrotas) e impede usuários logados de acessarem `/login` novamente.

## Fluxo de autenticação (Supabase)

1. O middleware (`middleware.ts`) garante que somente sessões válidas da Supabase cheguem a `/portal`.
2. Na página `/login`, o formulário chama `loginAction` que executa `supabase.auth.signInWithPassword` no servidor. Ao concluir, o usuário segue para `/portal` (ou para o caminho definido em `redirectTo`).
3. Em `/portal`, `getServerComponentClient` busca a sessão, renderiza os dados do usuário e exibe `LogoutButton`, que chama `logoutAction`.
4. O helper `src/lib/supabase/client.ts` fixa o client browser-side para futuras telas client components (uploaders, chats, etc.).

Para expandir:

1. Habilite magic links/OTP ou provedores OAuth diretamente no Supabase Auth e reutilize o mesmo cliente.
2. Ajuste `PROTECTED_PREFIXES` em `middleware.ts` para cobrir novas áreas (ex.: `/materiais`).
3. Use `SUPABASE_SERVICE_ROLE_KEY` apenas em rotas protegidas server-side para buscar dados reais (por exemplo, materiais em uma tabela `materials`).
4. Caso deseje outro IdP (Auth0/Clerk), basta substituir os helpers em `src/lib/supabase` e as ações mantendo o middleware como referência.

## Deploy na Vercel

1. Configure um novo projeto apontando para este repositório.
2. Defina as variáveis de ambiente em **Project Settings → Environment Variables**.
3. Faça o deploy (`main` ou branch especificada). Após a publicação, você pode atribuir um domínio personalizado, como `portal.olibanovip.com.br`.

## Suporte

Abra uma issue ou converse com a equipe Olíbano para priorizar integrações (pagamentos, CMS, uploads, etc.).
