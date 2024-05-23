// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const customerTable = sqliteTable('customer', {
  customerId: integer('customerId').primaryKey(),
  companyName: text('companyName').notNull(),
  contactName: text('contactName').notNull(),
});
