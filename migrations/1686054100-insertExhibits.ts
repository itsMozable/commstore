import { Sql } from 'postgres';

export const exhibits = [
  {
    id: 1,
    name: 'Exhibit-1',
    type: 'Pokemon',
    price: 3500,
    img: '/CP-pics/Pikachu_Cage_Steam.png',
    alt: 'Enslaved Exhibit',
  },
  {
    id: 2,
    name: 'Exhibit-2',
    type: 'Pokemon',
    price: 6500,
    img: '/CP-pics/Pokemon_Cage_Steam.png',
    alt: 'Enslaved Exhibit',
  },
  {
    id: 3,
    name: 'Exhibit-3',
    type: 'Pokemon',
    price: 9000,
    img: '/CP-pics/Pokemon_Cage.png',
    alt: 'Enslaved Exhibit',
  },
  {
    id: 4,
    name: 'Exhibit-4',
    type: 'Pokemon',
    price: 20000,
    img: '/CP-pics/Pokemon_blue.png',
    alt: 'Enslaved Exhibit',
  },
];

export async function up(sql: Sql) {
  for (const exhibit of exhibits) {
    await sql`
    INSERT INTO exhibits (name, type, price, img, alt) VALUES(${exhibit.name}, ${exhibit.type}, ${exhibit.price}, ${exhibit.img}, ${exhibit.alt})
  `;
  }
}
export async function down(sql: Sql) {
  for (const exhibit of exhibits) {
    await sql`
  DELETE FROM exhibits WHERE id = ${exhibit.id}
  `;
  }
}
