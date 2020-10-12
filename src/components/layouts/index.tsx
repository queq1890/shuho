import { FC } from 'react';
import { Flex } from '@chakra-ui/core';

import Header from 'components/molecules/Header';

const MainLayout: FC = ({ children }) => (
  <>
    <Header />
    <Flex direction="column" as="main" justifyContent="center" px={8}>
      <Flex
        as="article"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        {children}
      </Flex>
    </Flex>
  </>
);

export default MainLayout;
