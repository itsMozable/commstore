import { cache } from 'react';
import { Exhibit } from '../migrations/1686053188-createTableExhibits';
import { sql } from './connect';

//  This is coming from the database
/* export const lsExhibits = [
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
export function getExhibitsById(id: number) {
  return exhibits.find((exhibit: { id: number }) => exhibit.id === id);
} */
/* type Exhibit = {
  id: number;
  name: string;
  type: string;
  price: string;
  img: string;
  alt: string;
}; */

export const getExhibits = cache(async () => {
  const exhibits = await sql<Exhibit[]>`
  SELECT * FROM exhibits`;
  return exhibits;
});

export const getExhibitById = cache(async (id: number) => {
  const [exhibit] = await sql<Exhibit[]>`
SELECT * FROM exhibits WHERE id = ${id}`;
  return exhibit;
});

export const createExhibit = cache(
  async (
    name: string,
    type: string,
    price: number,
    img: string,
    alt: string,
  ) => {
    const [exhibit] = await sql<Exhibit[]>`
  INSERT INTO exhibits (name, type, price, img, alt) VALUES (${name}, ${type}, ${price}, ${img}, ${alt}) RETURNING *`;
    return exhibit;
  },
);

export const deleteExhibitById = cache(async (id: number) => {
  const [exhibit] =
    await sql`<Exhibit[]>DELETE FROM exhibits WHERE id = ${id} RETURNING *`;
  return exhibit;
});

export const updateExhibitById = cache(
  async (
    id: number,
    name: string,
    type: string,
    price: number,
    img: string,
    alt: string,
  ) => {
    const [exhibit] = await sql<Exhibit[]>`
  UPDATE exhibits SET name = ${name}, type = ${type}, price = ${price}, img = ${img}, alt = ${alt} WHERE id = ${id} RETURNING *`;
    return exhibit;
  },
);

type exhibitFoods = {
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

export const getExhibitsWithFood = cache(async (id: number) => {
  const exhibitFoods = await sql<exhibitFoods[]>`
    SELECT exhibits.id AS exhibit_id,
    exhibits.name AS exhibit_name,
    exhibits.type AS exhibit_type,
    exhibits.price AS exhibit_price,
    exhibits.img AS exhibit_img,
    exhibits.alt AS exhibit_alt,
    foods.id AS food_id,
    foods.name AS food_name,
    foods.type AS food_type,
     FROM exhibits
    INNER JOIN exhibits_food ON exhibits.id = exhibits_food.exhibitId
    INNER JOIN foods ON foods.id = exhibits_foods.food_id
    WHERE exhibits.id = ${id}`;

  return exhibitFoods;
});
