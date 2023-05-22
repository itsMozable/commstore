import './globals.scss';
import './CPFontStyles.scss';
import Image from 'next/image';
import Link from 'next/link';
import CPButtonGreen from './CPButtonGreen';

export default function HomePage() {
  return (
    <main className="hpMain">
      <section className="menu">
        <h1>Samurai Warehouse</h1>
        <ul>
          <li>
            <Link href={'Products/SamuraiSale'}>
              <h2 class="cyberpunk glitched">Livestock</h2>
            </Link>
          </li>
          <li>
            <Link href={'Products/Livestock'}>
              <h2 class="cyberpunk glitched">Samurai Sale</h2>
            </Link>
          </li>
        </ul>
      </section>
      <CPButtonGreen />
    </main>
  );
}
