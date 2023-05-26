import Image from 'next/image';
import Link from 'next/link';
import { lsExhibits } from '../../../database/finalExhibits';
import CPButtonCart from '../../CPButtonCart';
import CPButtonPurple from '../../CPButtonCart';

export default function LivestockPage() {
  return (
    <main className="lsMain">
      <h1 className="cyberpunk glitched">Samurai Livestock</h1>
      <h2>something to eat - something to fight</h2>
      {lsExhibits.map((exhibits) => {
        return (
          <div key={`Exhibit-div-${exhibits.id}`}>
            <Link
              href={`/products/${exhibits.id}`}
              data-test-id={`product-${exhibits.id}`}
            >
              {' '}
              <br />
              <Image
                src={exhibits.img}
                width={200}
                height={200}
                alt="Enslaved Exhibit"
              />{' '}
              {exhibits.name} {': '}
              {exhibits.type}{' '}
            </Link>
            <CPButtonPurple />
          </div>
        );
      })}
    </main>
  );
}
