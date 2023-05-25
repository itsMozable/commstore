// only run on Server component !
/* import fs from 'node:fs';

fs.readFile('./app.page.js', () => {}); */

export const lsExhibits = [
  {
    Id: 1,
    name: 'Exhibit-1',
    type: 'Pokemon',
    price: 3500,
    img: '/CP-pics/Pikachu_Cage_Steam.png',
    alt: 'Enslaved Exhibit',
  },
  {
    Id: 2,
    name: 'Exhibit-2',
    type: 'Pokemon',
    price: 6500,
    img: '/CP-pics/Pokemon_Cage_Steam.png',
    alt: 'Enslaved Exhibit',
  },
  {
    Id: 3,
    name: 'Exhibit-3',
    type: 'Pokemon',
    price: 9000,
    img: '/CP-pics/Pokemon_Cage.png',
    alt: 'Enslaved Exhibit',
  },
  {
    Id: 4,
    name: 'Exhibit-4',
    type: 'Pokemon',
    price: 20000,
    img: '/CP-pics/Pokemon_blue.png',
    alt: 'Enslaved Exhibit',
  },
];
export function getExhibitsByName(name) {
  return lsExhibits.find((exhibit) => exhibit.name === name);
}
