import Image from 'next/image';
import Link from 'next/link';
import { getExhibit, getExhibits } from '../../database/finalExhibits';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { removeItem } from './actions';
import ChangeItemQuantity from './changeItemQuantity';

export const dynamic = 'force-dynamic';

export default async function CartPage() {
  const exhibits = await getExhibits();
  const exhibitQuantityCookie = getCookie('cart');
  const exhibitQuantities = !exhibitQuantityCookie
    ? []
    : parseJson(exhibitQuantityCookie);
  const exhibitsWithQuantity = exhibits.map((exhibit) => {
    const matchingValueFromCookie = exhibitQuantities.find(
      (exhibitObject) => exhibit.id === exhibitObject.id,
    );
    return {
      ...exhibit,
      quantity: matchingValueFromCookie ? matchingValueFromCookie.quantity : 0,
    };
  });

  const exhibitsInCart = exhibitsWithQuantity.filter(
    (exhibit) => exhibit.quantity > 0,
  );

  const totalPrice = exhibitsInCart.reduce(
    (accumulator, exhibit) => accumulator + exhibit.price * exhibit.quantity,
    0,
  );

  return (
    <main className="hpMain">
      {exhibitsInCart.length === 0 ? (
        <p>There are no exhibits in your cart</p>
      ) : (
        <div data-test-id="cart-product-<product id>">
          {exhibitsInCart.map((exhibit) => {
            const total = exhibits.quantity * exhibits.price;
            return (
              <div key={`product-div-${exhibits.id}`}>
                <Link href={`/products/${exhibits.id}`}>{exhibits.name}</Link>
                <Link href={`/products/${exhibits.id}`}>
                  <p>Eddies {exhibits.price}</p>
                </Link>

                <form data-test-id="cart-product-quantity-<product id>">
                  <ChangeItemQuantity product={exhibit} />
                </form>

                <div>Eddies{totalPrice}</div>

                <form data-test-id="cart-product-remove-<product id>">
                  <removeItem product={exhibit} />
                </form>

                <div>
                  <h2>Subtotal: €{totalPrice}</h2>
                  <div data-test-id="cart-total" />
                  <div>
                    <Link href="/products">Continue shopping</Link>
                    <Link href="/cart/checkout" data-test-id="cart-checkout">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
