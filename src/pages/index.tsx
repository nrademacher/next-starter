import Head from 'next/head';
import { Welcome } from '../components/Welcome';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
    </>
  );
}
