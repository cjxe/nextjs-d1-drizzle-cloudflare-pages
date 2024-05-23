<h1 align="center">Next.js + Cloudflare D1 + Drizzle ORM + Drizzle Kit + Cloudflare Pages starter kit</h1>

# Getting started

## Prerequisites

1. Node.js >=v20.11.0
2. pnpm >=v8.15.4

## Initialise the database(s)

1. [Create a D1 database.](https://developers.cloudflare.com/d1/get-started/#3-create-a-database)
2. Create a `.env` file and a `wrangler.toml` file with the necessary information (e.g., find and
   replace all "TBA" and "nextjs-d1-drizzle-cloudflare-pages" values in the code).
3. Install the app's dependencies:

```sh
pnpm install
```

4. Generate db migration files (which are SQL queries that will be run on the databases to update
   their tables in the next step):

```sh
pnpm db:generate
```

5. Run db migrations:

- local db: `pnpm db:migrate:local`
- preview (remote) db: `pnpm db:migrate:preview`
- prod (remote) db: `pnpm db:migrate:prod`

6. View the database using a graphical user interface:

- local db: `pnpm db:studio:local`
- preview (remote) db: `pnpm db:studio:preview`
- prod (remote) db: `pnpm db:studio:prod`

## Run the app

- Run Next.js on dev. Ideal for development since it supports hot-reload/fast refresh.

```sh
pnpm dev
```

⚠️ **Warning**: `next start` will return an error due to how the application is designed to run on
Cloudflare pages.

- Run Cloudflare Pages locally. Ideal to test how the app would work after being deployed.

```sh
pnpm pages:dev
```

⚠️ **Warning**: As of 20 May 2024, connecting to the prod remote db on the local code
[is not supported](https://developers.cloudflare.com/d1/build-with-d1/local-development/).

## Deploy

- Deploy code to pages:

```sh
pnpm pages:deploy
```
