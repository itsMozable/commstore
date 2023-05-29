// only run on Server component !
/* import fs from 'node:fs';

fs.readFile('./app.page.js', () => {}); */
/* type lsExhibits = {
  id: number,
  name: string,
  category: string,
  price: number,
  description: string,
}; */

export const lsExhibits = [
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
export function getExhibitsById(id) {
  return lsExhibits.find((exhibit) => exhibit.id === id);
}
