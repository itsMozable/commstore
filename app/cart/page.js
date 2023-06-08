import Link from 'next/link';
import { allExhibits } from '../../migrations/1686054100-insertExhibits';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ChangeItemQuantity from './changeItemQuantity';
import RemoveItems from './removeItems';

export const dynamic = 'force-dynamic';

export default async function CartPage() {
  const exhibits = await allExhibits;
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
        <div>
          {exhibitsInCart.map((exhibit) => {
            const totalPerExhibit = exhibit.quantity * exhibit.price;
            return (
              <div
                key={`product-div-${exhibit.id}`}
                data-test-id={`cart-product-${exhibit.id}`}
              >
                <Link href={`/products/${exhibit.id}`}>
                  <h1 className="cyberpunk2077">{exhibit.name}</h1>
                </Link>
                <img
                  src={exhibit.img}
                  height="150px"
                  width="150px"
                  alt={exhibit.name}
                />
                <p>Cost for this Exhibit : {exhibit.price} Eddies</p>
                <form>
                  <ChangeItemQuantity exhibits={exhibit} />
                </form>

                <div>
                  <h2>Subtotal: {totalPerExhibit} Eddies</h2>
                </div>
                <form data-test-id="cart-product-remove-<product id>">
                  <RemoveItems exhibits={exhibit} />
                </form>
              </div>
            );
          })}
          <h2 data-test-id="cart-total">Total{totalPrice}</h2>
          <div>
            <Link href="/products/livestock">Continue shopping</Link>
            <br />
            <button>
              <Link href="/cart/checkout" data-test-id="cart-checkout">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
