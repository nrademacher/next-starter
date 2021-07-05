import styles from './Code.module.scss';

export const Code: React.FC = ({ children }) => (
  <code className={styles.code}>{children}</code>
);
