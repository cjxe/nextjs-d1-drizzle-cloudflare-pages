import { createCustomerWithCustomId, getCustomers } from '@/server/functions/customers';

export const runtime = 'edge';

export default async function Home() {
  'use server';

  // either use server actions
  const customers = await getCustomers();

  // or fetch the api
  // const response = await fetch(`http://localhost:3000/api`);
  // const customers = (await response.json()).result; // <-- you will have to work with types quite a bit

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
