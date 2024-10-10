import { boolean, integer, pgTable, pgTableCreator, varchar } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `heartcodeTraining_${name}`);

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  isSmart: boolean().notNull().default(false),
});