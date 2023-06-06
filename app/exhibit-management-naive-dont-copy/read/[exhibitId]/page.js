import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getExhibitById } from '../../../../database/exhibits';
import AddToCartForm from './AddToCartForm';

export const dynamic = 'force-dynamic';

export default async function ExhibitPage({ params }) {
  /*   const singleExhibit = getExhibitById(Number(params.exhibitId)); */

  const singleExhibit = await getExhibitById(Number(params.exhibitId));

  if (!singleExhibit) {
    notFound();
  }
  return (
    <main>
      {' '}
      <h1>{singleExhibit.name}</h1>
      <Image
        data-test-id="product-image"
        src={singleExhibit.img}
        width={200}
        height={200}
        alt="Enslaved Exhibit"
      />
      <br />
      <p data-test-id="product-price">
        This is a Rare {singleExhibit.type} with a Value of{' '}
        {singleExhibit.price}{' '}
      </p>
      Eddies ! <br />
      <AddToCartForm exhibitId={singleExhibit.id} />
    </main>
  );
}
