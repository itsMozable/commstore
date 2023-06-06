import { Sql } from 'postgres';

export type Food = {
  id: number;
  type: string;
  name: 'string';
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE foods(
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      type varchar(30) NOT NULL,
      name varchar(30) NOT NULL
  )
  `;
}
export async function foods(sql: Sql) {
  await sql`
  DROP TABLE exhibits
  `;
}
