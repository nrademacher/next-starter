import styles from './Grid.module.scss';

export const Grid: React.FC = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);
