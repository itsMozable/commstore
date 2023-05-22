import './globals.scss';
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
      {/* Favicon Placeholder */}
      <link rel="icon" href="public/favicon.ico" sizes="any" />
      {/* Favicon Placeholder */}
      <header className={inter.className}>
        <body>
          <nav className="navigationbar">
            <Link href="/">Home</Link>
            <br />
            <Link href={'Products/SamuraiSale'}>Sale</Link>
            <br />
            <Link href={'Products/Livestock'}>Livestock</Link>
          </nav>
          {children}
        </body>
      </header>
    </html>
  );
}
