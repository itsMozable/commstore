import './globals.scss';
import './CPFontStyles.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Welcome Samurai | For this life or another',
    template: '%s | Malfunction',
  },
  description: 'For this life or another, we will meet again',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <nav className="cpHeader">
          <Link href="/">Home</Link>
          <br />
          <Link href="products/livestock" data-test-id="products-link">
            Livestock
          </Link>
          <br />
          <Link href="products/samuraiSale">Sale</Link>
          <br />
          <Link href="products/cart">Cart</Link>
          <br />
        </nav>{' '}
        {children}
      </header>
      <body className={inter.className}></body>
      <footer></footer>
    </html>
  );
}
