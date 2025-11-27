# Portal Olíbano

Portal Olíbano é a nova área logada para distribuir ebooks, trilhas sonoras e experiências das Práticas Integrativas Complementares. O objetivo deste repositório é fornecer um ponto de partida seguro para integrar um provedor de identidade (Auth0, Clerk, Supabase Auth, etc.) e liberar conteúdos como o Ebook 01 através de `/portal`.

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

2. Copie o arquivo `.env.example` para `.env.local` e preencha com as credenciais do provedor escolhido:

   ```bash
   cp .env.example .env.local
   ```

3. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:3000/login`. Após integrar autenticação, redirecione usuários autenticados para `/portal`.

## Scripts adicionais

| Script          | Descrição                                         |
| ---------------- | ------------------------------------------------- |
| `npm run build` | Gera o bundle de produção do Next.js.             |
| `npm run start` | Inicia o servidor já compilado (`npm run build`). |
| `npm run lint`  | Executa o ESLint com a config oficial do Next.js. |
| `npm run format`| Aplica o Prettier em todo o projeto.              |

Commits passam automaticamente por `npm run lint` via Husky (arquivo `.husky/pre-commit`).

## Estrutura principal

- `src/app/login`: tela de login com formulário placeholder e instruções para conectar o provider.
- `src/app/portal`: home logada com cards de materiais e checklist técnico.
- `src/data/materials.ts`: mock com materiais (Ebook 01, trilhas binaurais, workshops).
- `.env.example`: variáveis esperadas para autenticação e URL pública.

## Próximos passos para autenticação real

1. Escolha um provedor (Auth0, Clerk, etc.) e preencha as variáveis de ambiente.
2. Crie um middleware (`src/middleware.ts`) que verifique o cookie/JWT e redirecione visitantes não autenticados para `/login`.
3. Substitua o formulário de `/login` pelo componente oficial do provider (widget ou chamada API).
4. Após validar a sessão, direcione o usuário para `/portal` e carregue os conteúdos a partir de um CMS/API.

## Deploy na Vercel

1. Configure um novo projeto apontando para este repositório.
2. Defina as variáveis de ambiente em **Project Settings → Environment Variables**.
3. Faça o deploy (`main` ou branch especificada). Após a publicação, você pode atribuir um domínio personalizado, como `portal.olibanovip.com.br`.

## Suporte

Abra uma issue ou converse com a equipe Olíbano para priorizar integrações (pagamentos, CMS, uploads, etc.).
