import { Sql } from 'postgres';

export type Exhibit = {
  id: number;
  name: string;
  type: string;
  price: string;
  img: string;
  alt: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE exhibits(
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(30) NOT NULL,
      type varchar(30) NOT NULL,
      price varchar(6) NOT NULL,
      img varchar(50),
      alt varchar(50)
  )
  `;
}
export async function down(sql: Sql) {
  await sql`
  DROP TABLE exhibits
  `;
}
