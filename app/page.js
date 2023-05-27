import './globals.scss';
import './CPFontStyles.scss';
import Link from 'next/link';
import CPButtonCart from './CPButtonCart';

export default function HomePage() {
  return (
    <main className="hpMain">
      <section className="menu">
        <h1>Samurai Warehouse</h1>
        <br />
        <ul>
          <li>
            <Link href="products/livestock">
              <h2 className="cyberpunk glitched">Livestock</h2>
            </Link>
          </li>
          <li>
            <Link href="products/samuraiSale">
              <h2 className="cyberpunk glitched">Sale</h2>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
