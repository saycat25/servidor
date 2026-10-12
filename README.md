# GameDeals Bot

Dashboard para rastrear jogos grátis e promoções da Steam/Epic Games Store e publicar ofertas em um canal do Discord por webhook.

## Stack
- Next.js + TypeScript na Vercel
- Supabase Auth + PostgreSQL
- Vercel Cron para verificações agendadas
- Discord Webhook para publicação

## Configuração
1. Importe este repositório na Vercel.
2. Escolha/crie um projeto Supabase dedicado e execute `supabase/schema.sql` no SQL Editor.
3. Configure `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` e `CRON_SECRET` na Vercel.
4. Crie a conta de painel no Supabase Auth e depois desative o cadastro público.
5. Crie um webhook nas configurações do canal Discord, configure no painel e salve.
6. Faça deploy e confira os logs da execução agendada.

## Segurança
- Nunca exponha `SUPABASE_SERVICE_ROLE_KEY` nem o webhook no cliente.
- Proteja a rota cron com `CRON_SECRET`.
- Mantenha o webhook privado.

## Observações
- O cron em `vercel.json` roda a cada seis horas; mudar o intervalo no dashboard não altera a agenda da Vercel automaticamente.
- APIs públicas das lojas podem mudar de formato; valide os resultados antes de ativar publicação automática.
- Preços e disponibilidade variam por região e podem expirar.
