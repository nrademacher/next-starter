import { Container, Main, Counter, CardGrid, Footer } from '@/components';

export default function Home() {
  return (
    <Container>
      <Main>
        <Counter />
        <CardGrid />
      </Main>
      <Footer />
    </Container>
  );
}
