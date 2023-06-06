import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

/* const sql = postgres('postgres://user:pass@host:port/dbname' */
const sql = postgres();
console.log(
  await sql`
  SELECT * FROM exhibits;
`,
);
//  For testing
await sql.end();
