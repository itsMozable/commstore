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
      <body className={inter.className}>
        <nav className="cpHeader">
          <Link href="/">
            <h2 className="h2.cyberpunk.glitched">Home</h2>
          </Link>
          <br />
          <Link href="products/livestock">Livestock</Link>
          <br />
          <Link href="products/samuraiSale">Sale</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
