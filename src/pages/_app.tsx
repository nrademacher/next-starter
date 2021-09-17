import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import '@/styles/globals.scss';
import { store } from '@/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>Next Starter</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
