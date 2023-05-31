'use client';
import { useRouter } from 'next/navigation';
import { removeItem } from './actions';

export default function RemoveItems({ exhibits }) {
  const router = useRouter();

  return (
    <div>
      <button
        formAction={async () => {
          router.refresh();
          await removeItem(exhibits);
        }}
      />
    </div>
  );
}
