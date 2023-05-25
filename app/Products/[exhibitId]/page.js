import '../../CPFontStyles.scss';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getExhibitsById } from '../../../database/finalExhibits';

export const dynamic = 'force-dynamic';

export default function ProductIdPage({ params }) {
  const singleExhibit = getExhibitsById(Number(params.exhibitId)); // Covert Strng into a number

  if (!singleExhibit) {
    notFound(<h1>Sorry, no exhibit found</h1>);
  }
  return (
    <main>
      <h1>{singleExhibit.exhibitId}</h1>
      <Image
        /* src={`/lsExhibits/${singleExhibit.img}.png`} */
        src={singleExhibit.img}
        width={200}
        height={200}
        alt="Enslaved Exhibit"
      />
      <br />
      This is a Rare {singleExhibit.type} with a Value of {singleExhibit.price}{' '}
      Eddies ! <br />
      <h1>Samurai Livestock</h1>
      <h2>something to eat - something to fight</h2>
    </main>
  );
}
