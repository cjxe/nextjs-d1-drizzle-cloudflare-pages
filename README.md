# Getting started

For dev mode you need to:

1. Create a D1 Database https://developers.cloudflare.com/d1/get-started/#3-create-a-database
2. Create a `.env` file and a `wrangler.toml` file with the necessary information.
3. Find and replace all "TBA" and "nextjs-d1-drizzle-cloudflare-pages" values in the code.
4. Generate db migration files:

```sh
pnpm db:generate
```

4. Run db migrations locally:

```sh
pnpm db:migrate:local
```

5. Run Next.js on dev:

```sh
pnpm dev
```

⚠️ **Warning**: `next start` will return an error due to how the application is designed to run on
Cloudflare pages.

6. Run pages locally:

```sh
pnpm pages:dev
```

7. Deploy code to pages:

```sh
pnpm pages:deploy
```
