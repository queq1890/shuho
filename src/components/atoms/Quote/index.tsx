import { FC } from 'react';
import styles from './Quote.module.scss';

const Quote: FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Quote;
