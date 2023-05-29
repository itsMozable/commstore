'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
/* import { useState } from 'react'; */
import { addToCart } from './actions';

export default function AddToCartForm(props) {
  const [quantity, setQuantity] = useState(' ');
  const router = useRouter();
  return (
    /* Warning: in order to use Server Action you need to update the next,js config with serverActions:true,
    when using Server actions we ont need prevent the default of the form */

    /* Wir wollen hier nummern speichern und keinen String! Tipp für die Seite! */
    <form>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      {/* Instead of using onClick we use formAction */}

      {/* Wir wollen hier nummern speichern und keinen String! Tipp für die Seite! */}

      {/* formAction allows to run server action inside of client component */}
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await addToCart(props.exhibitId, quantity);
        }}
      >
        {/*       this id is dynamic based on the input value that i choose */}
        Add to Cart
      </button>
    </form>
  );
}
