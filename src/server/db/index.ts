import { drizzle } from 'drizzle-orm/d1';
import * as schema from '@/server/db/schema';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export const initDbConnection = async () => {
  'use server';

  return drizzle(getRequestContext().env.DB, { schema });
};
