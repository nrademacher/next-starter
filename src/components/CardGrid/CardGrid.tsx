import styles from './CardGrid.module.scss';
import { GridCard } from './GridCard';

export const Grid: React.FC = ({ children }) => (
  <section className={styles.grid}>{children}</section>
);

export const CardGrid: React.FC = () => (
  <Grid>
    <GridCard
      link="https://nextjs.org/docs"
      title="Documentation &rarr;"
      text="Find in-depth information about Next.js features and API."
    />
    <GridCard
      link="https://nextjs.org/learn"
      title="Learn &rarr;"
      text="Learn about Next.js in an interactive course with quizzes!"
    />
    <GridCard
      link="https://github.com/vercel/next.js/tree/master/examples"
      title="Examples &rarr;"
      text="Discover and deploy boilerplate example Next.js projects."
    />
    <GridCard
      link="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      title="Deploy &rarr;"
      text="Instantly deploy your Next.js site to a public URL with Vercel."
    />
  </Grid>
);
