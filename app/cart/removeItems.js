'use client';
import { useRouter } from 'next/navigation';
import CPButtonPurple from '../buttons/CPButtonCart';
import { removeItem } from './actions';

export default function RemoveItems({ exhibits }) {
  const router = useRouter();

  return (
    <div>
      <button
        data-test-id={`cart-product-quantity-${exhibits.id}`}
        formAction={async () => {
          router.refresh();
          await removeItem(exhibits);
        }}
      >
        Remove oida
      </button>
    </div>
  );
}
