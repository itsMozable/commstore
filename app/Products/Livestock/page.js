import Image from 'next/image';
import Link from 'next/link';
import { lsExhibits } from '../../../database/finalExhibits';

export default function LivestockPage() {
  return (
    <main className="lsMain">
      <h1 className="cyberpunk">Samurai Livestock</h1>
      <h2>something to eat - something to fight</h2>
      {lsExhibits.map((exhibits) => {
        return (
          <div key={`Exhibit-div-${exhibits.Id}`}>
            <Link href={`/products/${exhibits.name}`}>
              {' '}
              <br />
              {exhibits.name} {exhibits.type}{' '}
              <Image
                src={exhibits.img}
                width={200}
                height={200}
                alt="Enslaved Exhibit"
              />
            </Link>
          </div>
        );
      })}
    </main>
  );
}
