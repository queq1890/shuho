import { FC } from 'react';
import Header from 'components/molecules/Header';

import styles from './MainLayout.module.scss';

const MainLayout: FC = ({ children }) => (
  <>
    <Header />
    <main className="flex flex-col flex-center px-4 md:px-8">
      <article className={styles.article}>{children}</article>
    </main>
  </>
);

export default MainLayout;
