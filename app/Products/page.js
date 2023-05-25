import Image from 'next/image';
import Link from 'next/link';
import { lsExhibits } from '../../database/finalExhibits';

export const metadata = {
  title: 'Welcome Samurai | For this life or another',
  description: 'For this life or another, we will meet again',
};

export default function ProductsPage() {
  return (
    <main className="ppMain">
      <h1 className="cyberpunk">Samurai Upgrades</h1>
      <h2>Bigger - Better - Stronger</h2>
      {lsExhibits.map((exhibits) => {
        return (
          <div key={`Exhibit-div-${exhibits.Id}`}>
            <Link href={`/products/${exhibits.Id}`}> {exhibits.Id} </Link>
            <Image
              src={exhibits.Id}
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
