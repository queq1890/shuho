import { FC } from 'react';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.root}>
      <div className="flex">
        <NextLink href="/" passHref>
          <Button as="a" variant="ghost" p={[1, 4]}>
            Home
          </Button>
        </NextLink>
        <NextLink href="/about" passHref>
          <Button as="a" variant="ghost" p={[1, 4]}>
            About
          </Button>
        </NextLink>
      </div>
    </div>
  );
};

export default Header;
