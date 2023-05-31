'use client';
import './CPButtons.module.scss';
import { useRouter } from 'next/navigation';

export default function CPButtonPurple() {
  const router = useRouter();
  return (
    <button
      className="cyberpunk2077 purple"
      data-test-id="product-add-to-cart"
      formAction={async () => {
        router.refresh();
        await addToCart(props.exhibitId, quantity);
      }}
    >
      Add to cart
    </button>
  );
}
