import { Sql } from 'postgres';

export type Exhibits_Food = {
  id: number;
  type: string;
  name: 'string';
};

export type exhibitFoods = {
  exhibit_id: number;
  exhibit_name: string;
  exhibit_type: string;
  exhibit_price: number;
  exhibit_img: string;
  exhibit_alt: string;
  food_id: number;
  food_name: string;
  food_type: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE exhibits_foods(
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      exhibit_id integer REFERENCES exhibits(id) ON DELETE CASCADE,
      food_id  integer REFERENCES foods(id)
  )
  `;
}
export async function exhibits_foods(sql: Sql) {
  await sql`
  DROP TABLE exhibits
  `;
}
