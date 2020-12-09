import { FC } from 'react';
import NextLink from 'next/link';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.root}>
      <div className="flex">
        <NextLink href="/" passHref>
          <a className="p-1 md:p-4 font-semibold">Home</a>
        </NextLink>
        <NextLink href="/about" passHref>
          <a className="p-1 md:p-4 font-semibold">About</a>
        </NextLink>
      </div>
    </div>
  );
};

export default Header;
