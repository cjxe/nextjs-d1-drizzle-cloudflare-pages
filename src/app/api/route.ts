import { db } from '@/server/db';
import { customersTable } from '@/server/db/schema';

export const runtime = 'edge';

export async function GET() {
  const result = await db.select().from(customersTable);

  return Response.json({ result });
}
