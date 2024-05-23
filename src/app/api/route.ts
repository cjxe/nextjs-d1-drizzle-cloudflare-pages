import { db } from '@/server/db';
import { customerTable } from '@/server/db/schema';

export const runtime = 'edge';

export async function GET() {
  const result = await db.select().from(customerTable);

  return Response.json({ result });
}
