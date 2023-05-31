'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function addToCart(exhibitId: number, quantity: number) {
  /* 1. get the current cookie
  this get the cookies from the request headers */
  const exhibitQuantityCookie = getCookie('cart');
  /* we parse the cookies */
  const exhibitQuantities = !exhibitQuantityCookie
    ? /* case a: cookie is undefined
  undefined
  we need to create the new array with the fruitComment inside */
      []
    : parseJson(exhibitQuantityCookie);
  /* we edit the object */
  /* we get the object for the fruit in cookies or undefined */
  const exhibitToUpdate = exhibitQuantities?.find((exhibitQuantity) => {
    return exhibitQuantity.id === exhibitId;
  });

  /* case b: the cookie is defined but have the fruit in the action
  if we are in fruit 1
  [{id:1, comment:'abc'}] */
  if (exhibitToUpdate) {
    /* we need to update the fruit command */
    exhibitToUpdate.quantity =
      Number(exhibitToUpdate.quantity) + Number(quantity);
  } else {
    /* case c: the cookie is defined but  have the fruit in the action
    if we are in fruit 1 doesn't
    [{id:2, comment:'abc}] */
    exhibitQuantities!.push({
      /* we need insert the fruit comment */
      id: exhibitId,
      quantity: Number(quantity),
    });
  }
  // override the cookie: set the cookies into the response headers
  await cookies().set('cart', JSON.stringify(exhibitQuantities));
}
