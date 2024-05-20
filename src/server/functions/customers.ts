import { db } from '@/server/db';
import { customersTable } from '@/server/db/schema';
import { revalidatePath } from 'next/cache';

export const runtime = 'edge';

export const getCustomers = async () => {
  'use server';

  return await db.select().from(customersTable);
};

export const createCustomerWithCustomId = async (formData: FormData) => {
  'use server';

  const customerId = formData.get('customerId');

  try {
    await db.insert(customersTable).values({
      customerId: Number(customerId),
      companyName: 'Alfreds Futterkiste',
      contactName: 'Maria Anders',
    });

    console.log('Customer inserted successfully.');
  } catch (error) {
    console.error('Error inserting customer:', error);
  } finally {
    revalidatePath('/');
  }
};
