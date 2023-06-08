import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import cartPage from '../../cart/page';

export default function CheckoutPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  function validate() {
    if (firstName.length < 2) {
      return 'Field cannot be empty';
      if (!firstName.match(/^[a-zA-Z]+$/)) {
        return 'Field can only contain letters';
        if (firstName.match(/\d+/)) {
          return 'Field cannot contain numbers';
        }
      }
    }
    return (
      firstName.length === 0 &&
      lastName.length === 0 &&
      email.length === 0 &&
      adress.length === 0 &&
      city.length === 0 &&
      postCode.length === 0 &&
      country.length === 0 &&
      creditCard.length === 0 &&
      expiration.length === 0 &&
      securityCode.length === 0
    );
  }

  const isValid = validate();

  const handleClick = (event) => {
    event.preventDefault();
  };

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
            Confirm Transaction
          </Link>
        </form>
      </div>
      <div className={' '} />
    </div>
  );
}
