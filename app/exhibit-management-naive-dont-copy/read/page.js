import Image from 'next/image';
import Link from 'next/link';
import { getExhibits } from '../../../database/exhibits';

export const metadata = {
  title: 'Welcome Samurai | For this life or another',
  description: 'For this life or another, we will meet again',
};

export default async function ProductsPage() {
  const exhibits = await getExhibits();
  return (
    <main className="ppMain">
      <h1 className="cyberpunk">Samurai Upgrades</h1>
      <h2>Bigger - Better - Stronger</h2>
      {exhibits.map((exhibits) => {
        return (
          <div key={`Exhibit-div-${exhibits.id}`}>
            <Link
              href={`/exhibit-management-naive-dont-copy/read/${exhibits.id}`}
            >
              {' '}
              {exhibits.name}{' '}
            </Link>
            <Image
              src={exhibits.img}
              width={200}
              height={200}
              alt="Enslaved Exhibit"
            />
          </div>
        );
      })}
    </main>
  );
}
