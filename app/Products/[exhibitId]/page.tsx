import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getExhibitsById } from '../../../database/finalExhibits';
import CPButtonPurple from '../../CookieBanner.module.scss';
import AddToCartForm from './AddToCartForm';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Samurai Warehouse' },
  description: 'Everything at once',
};

type Props = {
  params: { exhibitId: string };
};

export default async function SingleProductPage(props: Props) {
  const singleExhibit = await getExhibitsById(Number(props.params.exhibitId));

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
      {<AddToCartForm exhibit={singleExhibit} />}
    </main>
  );
}
