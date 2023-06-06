import './globals.scss';
import './CPFontStyles.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { CookieBanner } from './CookieBanner';
import AddToCartForm from './products/[exhibitId]/AddToCartForm';

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
      <body className={inter.className}>
        <nav className="cpHeader">
          <Link href="/">Home</Link>
          <br />
          <Link href="products/livestock" data-test-id="products-link">
            Livestock
          </Link>
          <br />
          <Link href="products/samuraiSale">Sale</Link>
          <br />
          <Link href="/cart" data-test-id="cart-link">
            🛒
          </Link>
        </nav>{' '}
        {children}
        <CookieBanner />
        <footer> See you in the Afterlife Mozi </footer>
      </body>
    </html>
  );
}
