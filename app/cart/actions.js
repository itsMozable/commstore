'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../utility/cookies';
import { parseJson } from '../../utility/json';

// remove product from cart
export async function removeItem(item) {
  const exhibitQuantityCookie = getCookie('cart'); // get the current cookies from the Request Headers
  const exhibitQuantities = !exhibitQuantityCookie // parse the cookie
    ? []
    : parseJson(exhibitQuantityCookie);
  // filter the arrays of items in the cart
  // assign the filtered array to a new variable
  const removeFromCart = exhibitQuantities.filter(
    (exhibit) => exhibit.id !== item.id, // return a new array without the item that has been deleted
  );
  await cookies().set('cart', JSON.stringify(removeFromCart));
}

// increase quantity
export async function addQuantity(item) {
  const exhibitQuantityCookie = getCookie('cart');
  const exhibitQuantities = !exhibitQuantityCookie
    ? []
    : parseJson(exhibitQuantityCookie);
  const increase = exhibitQuantities.find((exhibit) => {
    return exhibit.id === item.id;
  });
  increase.quantity += 1;
  await cookies().set('cart', JSON.stringify(exhibitQuantities));
}

// decrease quantity
export async function subtractQuantity(item) {
  const exhibitQuantityCookie = getCookie('cart');
  const exhibitQuantities = !exhibitQuantityCookie
    ? []
    : parseJson(exhibitQuantityCookie);
  const decrease = exhibitQuantities.find((exhibit) => {
    return exhibit.id === item.id;
  });
  decrease.quantity -= 1;
  await cookies().set('cart', JSON.stringify(exhibitQuantities));
}
