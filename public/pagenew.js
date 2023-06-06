import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CPButtonPurple from '../../CookieBanner.module.scss';
import AddToCartForm from '../app/products/[exhibitId]/AddToCartForm';
import { getExhibitsById } from '../database/exhibits';

export const dynamic = 'force-dynamic';

export default function ProductIdPage({ Props }) {
  const singleExhibit = getExhibitsById(Number(props.params.exhibitId));

  // Covert String into a number

  if (!singleExhibit) {
    notFound(<h1>Sorry, no exhibit found</h1>);
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
      <CPButtonPurple />
      <AddToCartForm exhibit={singleExhibit} />
    </main>
  );
}
