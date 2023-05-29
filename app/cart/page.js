import Image from 'next/image';
import Link from 'next/link';
import { getExhibit, getExhibits } from '../../database/finalExhibits';
import { getCookie } from '../../utility/cookies';
import { parseJson } from '../../utility/json';
import { removeItem } from './actions';
import ChangeItemQuantity from './changeItemQuantity';

export default function CartPage() {
  return (
    <main className="hpMain">
      <section className="menu">
        <h1>Samurai Warehouse</h1>
        <br />
        <ul>
          <li>
            <h2>Hola</h2>
          </li>
        </ul>
      </section>
    </main>
  );
}
