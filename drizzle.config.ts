import { defineConfig } from 'drizzle-kit';

import { env } from '@/env';

/*
 * NOTE: Workaround to make drizzle studio work with D1.
 * https://kevinkipp.com/blog/going-full-stack-on-astro-with-cloudflare-d1-and-drizzle/
 * Github discussion: https://github.com/drizzle-team/drizzle-orm/discussions/1545#discussioncomment-8115423
 */
export default env.LOCAL_DB_PATH
  ? {
      schema: './src/server/db/schema.ts',
      driver: 'd1',
      dialect: 'sqlite',
      dbCredentials: {
        url: env.LOCAL_DB_PATH,
      },
    }
  : defineConfig({
      schema: './src/server/db/schema.ts',
      out: './migrations',
      driver: 'd1',
      dialect: 'sqlite',
      dbCredentials: {
        wranglerConfigPath:
          new URL('wrangler.toml', import.meta.url).pathname + env.WRANGLER_CONFIG
            ? ` ${env.WRANGLER_CONFIG}`
            : '',
        dbName: env.DB_NAME!,
      },
    });
