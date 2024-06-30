import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./schema/*",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'postgres://postgres:ICode247@localhost:5432/codemasters',
  }
});
