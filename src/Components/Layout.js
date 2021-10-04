import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => (
  <>
    <Head>
      <title> NEXT AIRPORT </title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>누구나 접근할 수 있는 항공사 웹사이트 🚀</h1>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/spin-button">
            <a>SPIN BUTTON</a>
          </Link>
        </li>
      </ul>
    </nav>
    <>{children}</>
  </>
);

export default Layout;
