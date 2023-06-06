import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  getExhibitById,
  getExhibitsWithFood,
} from '../../../../database/exhibits';
import AddToCartForm from './AddToCartForm';

export const dynamic = 'force-dynamic';

export default async function ExhibitPage({ params }) {
  /*   const singleExhibit = getExhibitById(Number(params.exhibitId)); */

  /* const singleExhibit = await getExhibitById(Number(params.exhibitId)); */
  const exhibitFood = await getExhibitsWithFood(Number(params.exhibitId));

  if (!exhibitFood) {
    notFound();

    const exhibitWithFood = {
      id: exhibitFood[0].exhibitId,
      name: exhibitFood[0].exhibitName,
      img: exhibitFood[0].exhibitImg,
      type: exhibitFood[0].foodType,
      price: exhibitFood[0].foodPrice,
      exhibitFoods: exhibitFood.map((exhibitFood) => {
return {
  id: exhibitFood.foodId,
  name: exhibitFood.foodName,
  img: exhibitFood.foodImg,
  type: exhibitFood.foodType,
  price: exhibitFood.foodPrice,
    };
  }),
};

  return (
    <main>
      {' '}
      <h1>{exhibitWithFood.name}</h1>
      <Image
        data-test-id="product-image"
        src={exhibitWithFood.img}
        width={200}
        height={200}
        alt="Enslaved Exhibit"
      />
      <br />
      <p data-test-id="product-price">
        This is a Rare {exhibitWithFood.type} with a Value of {exhibitWithFood.price}{' '}
      </p>
      Eddies woh likes:<ul> {exhibitWithFood.exhibitFoods.map((exhibitFood) => {
        return <li key={` This ${exhibitFood.name}-${exhibitFood.id}`}>
          {exhibitFood.name} - ({exhibitFood.type})
        </li>;
      })}
</ul>
      <AddToCartForm exhibitId={exhibitWithFood.id} />
    </main>
  );
}
