import Head from 'next/head';
import { Container, Main, CardGrid, Footer } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Main>
          <CardGrid />
        </Main>
        <Footer />
      </Container>
    </>
  );
}
