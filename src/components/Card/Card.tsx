import styles from './Card.module.scss';

type Props = {
  link: string;
  title: string;
  text: string;
};

export const Card: React.FC<Props> = ({ link, title, text }) => (
  <a href={link} className={styles.card}>
    <h2>{title}</h2>
    <p>{text}</p>
  </a>
);
