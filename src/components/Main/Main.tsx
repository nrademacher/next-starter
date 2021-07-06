import { Code } from '../Code';

import styles from './Main.module.scss';

export const Main: React.FC = ({ children }) => (
  <main className={styles.main}>
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>

    <p className={styles.description}>
      Get started by editing{` `}
      <Code>src/pages/index.tsx</Code>
    </p>

    {children}
  </main>
);
