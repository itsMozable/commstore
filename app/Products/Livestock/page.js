import Image from 'next/image';
import Link from 'next/link';
import { lsExhibits } from '../../../database/finalExhibits';

export default function LivestockPage() {
  return (
    <main className="lsMain">
      <h1 class="cyberpunk">Samurai Livestock</h1>
      <h2>something to eat - something to fight</h2>

      {lsExhibits.map((exhibit) => {
        return (
          <div key={`Exhibit-div-${exhibit.id}`}>
            <Link
              href={`/Products/Livestock/${exhibit.id}`}
              data-test-id={`product-${exhibit.id}`}
            >
              {exhibit.name};
              <Image
                src={exhibit.img}
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
