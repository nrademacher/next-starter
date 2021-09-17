import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/img/favicon.ico" />
        <title>Next Starter</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
