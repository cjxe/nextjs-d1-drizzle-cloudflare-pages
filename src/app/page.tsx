import { createCustomerWithCustomId, getCustomers } from '@/server/functions/customers';

export const runtime = 'edge';

export default async function Home() {
  const customers = await getCustomers();

  return (
    <div>
      <p>Your customer IDs</p>
      <ul>
        {customers.map((customer) => (
          <li key={customer.customerId}>{customer.customerId}</li>
        ))}
        <li>
          <form action={createCustomerWithCustomId}>
            <input type="text" name="customerId" placeholder="add a new customer ID"></input>
            <button type="submit">submit</button>
          </form>
        </li>
      </ul>
      <p>end</p>
    </div>
  );
}
