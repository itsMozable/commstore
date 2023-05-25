import '../../CPFontStyles.scss';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getExhibitsByName } from '../../../database/finalExhibits';

export const dynamic = 'force-dynamic';

export default function ProductIdPage({ params }) {
  const singleExhibit = getExhibitsByName(params.productId);
  if (!singleExhibit) {
    notFound(<h1>Sorry, no exhibit found</h1>);
  }
  return (
    <main>
      <h1>{singleExhibit.ProductId}</h1>
      <Image
        src={`/lsExhibits/${singleExhibit.name}.png`}
        width={200}
        height={200}
        alt="Enslaved Exhibit"
      />
      This is a Rare {singleExhibit.name} with a Value of {singleExhibit.price}{' '}
      <h1>Samurai Livestock</h1>
      <h2>something to eat - something to fight</h2>
    </main>
  );
}
