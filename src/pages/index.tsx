import Head from 'next/head';
import { Counter, Container, Main, CardGrid, Footer } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Main>
          <Counter />
          <CardGrid />
        </Main>
        <Footer />
      </Container>
    </>
  );
}
