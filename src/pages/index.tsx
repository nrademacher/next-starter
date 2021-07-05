import Head from 'next/head';
import { Container, Main, Grid, Card, Footer } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Main>
          <Grid>
            <Card
              link="https://nextjs.org/docs"
              title="Documentation &rarr;"
              text="Find in-depth information about Next.js features and API."
            />
            <Card
              link="https://nextjs.org/learn"
              title="Learn &rarr;"
              text="Learn about Next.js in an interactive course with quizzes!"
            />
            <Card
              link="https://github.com/vercel/next.js/tree/master/examples"
              title="Examples &rarr;"
              text="Discover and deploy boilerplate example Next.js projects."
            />
            <Card
              link="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              title="Deploy &rarr;"
              text="Instantly deploy your Next.js site to a public URL with Vercel."
            />
          </Grid>
        </Main>
        <Footer />
      </Container>
    </>
  );
}
