import { AppProps } from 'next/app';
import Head from 'next/head';
import '../global-styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Next Starter</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
