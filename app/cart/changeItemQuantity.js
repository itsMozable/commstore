'use client';
import { useRouter } from 'next/navigation';
import { addQuantity, subtractQuantity } from './actions';

export default function ChangeItemQuantity({ exhibits }) {
  const router = useRouter();
  return (
    <div>
      <button
        formAction={async () => {
          router.refresh();
          await subtractQuantity(exhibits);
        }}
      >
        -
      </button>
      {exhibits.quantity}
      <button
        formAction={async () => {
          router.refresh();
          await addQuantity(exhibits);
        }}
      >
        +
      </button>
    </div>
  );
}
