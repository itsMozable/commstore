import { Sql } from 'postgres';

export const foods = [
  { id: 1, name: 'Meat', type: 'Beef' },
  { id: 2, name: 'Meat', type: 'Chicken' },
  { id: 3, name: 'Meat', type: 'Pork' },
  { id: 4, name: 'Meat', type: 'Fish' },
];

export async function up(sql: Sql) {
  for (const food of foods) {
    await sql`
    INSERT INTO foods (name, type) VALUES(${food.name}, ${food.type})
  `;
  }
}
export async function down(sql: Sql) {
  for (const food of foods) {
    await sql`
  DELETE FROM foods WHERE id = ${food.id}
  `;
  }
}
