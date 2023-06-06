import { Sql } from 'postgres';

const exhibitsFood = [
  { id: 1, exhibitId: 1, foodId: 1 },
  { id: 2, exhibitId: 1, foodId: 2 },
  { id: 3, exhibitId: 1, foodId: 3 },
  { id: 4, exhibitId: 1, foodId: 4 },
];
export async function up(sql: Sql) {
  for (const exhibitFood of exhibitsFood) {
    await sql`
    INSERT INTO exhibits_food (exhibitId, foodId) VALUES(${exhibitFood.exhibitId}, ${exhibitFood.foodId},)
  `;
  }
}
export async function down(sql: Sql) {
  for (const exhibitFood of exhibitsFood) {
    await sql`
  DELETE FROM exhibits_food WHERE id = ${exhibitFood.id}
  `;
  }
}
