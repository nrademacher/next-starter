import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>RS Demo Fashion</title>
      </Head>
      <div className="subpixel-antialiased optimize-legibility text-gray-9">
        <Component {...pageProps} />
      </div>
    </>
  );
}
