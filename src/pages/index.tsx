import Head from 'next/head';
import { Container, Main, Grid, Footer } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Main>
          <Grid />
        </Main>
        <Footer />
      </Container>
    </>
  );
}
