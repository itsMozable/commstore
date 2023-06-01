import Link from 'next/link';
import cartPage from '../../cart/page';

export default function CheckoutPage() {
  return (
    <div>
      <div>
        <form>
          <p>Contact Information</p>
          <div>
            <label>
              <input
                data-test-id="checkout-first-name"
                placeholder="First name"
                className={' '}
              />
            </label>
            <label>
              <input
                data-test-id="checkout-last-name"
                placeholder="Last name"
                className={' '}
              />
            </label>
          </div>
          <label>
            <input
              type="email"
              data-test-id="checkout-email"
              placeholder="Alias@Nightcity.com"
            />
          </label>

          <div>
            <p>Shipping Information</p>

            <label>
              <input data-test-id="checkout-address" placeholder="Address" />
            </label>

            <div className={' '}>
              <label>
                <input
                  data-test-id="checkout-city"
                  placeholder="City"
                  className={' '}
                />
              </label>
              <label>
                <input
                  data-test-id="checkout-postal-code"
                  placeholder="Post Code"
                  className={' '}
                />
              </label>
            </div>
            <label>
              <input data-test-id="checkout-country" placeholder="Country" />
            </label>
          </div>

          <div>
            <p>Payment Information</p>
            <label>
              <input
                data-test-id="checkout-credit-card"
                placeholder="Credit Card Number"
              />
            </label>
            <div className={' '}>
              <label>
                <input
                  type="date"
                  data-test-id="checkout-expiration-date"
                  className={' '}
                />
              </label>
              <label>
                <input data-test-id="checkout-security-code" className={' '} />
              </label>
            </div>
          </div>
          <span>Total : {cartPage.totalPrice}</span>
          <br />
          <Link data-test-id="checkout-confirm-order" href="/../thankYou">
            Confirm Order
          </Link>
        </form>
      </div>

      <div className={' '} />
    </div>
  );
}
