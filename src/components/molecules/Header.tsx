import { FC } from 'react';
import NextLink from 'next/link';
import { Flex, Button } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Header: FC = () => {
  return (
    <StickyNav
      bg="rgba(255, 255, 255, 0.8)"
      flexDirection="row-reverse"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="900px"
      width="100%"
      px={8}
      py={[4, 4, 8]}
      mt={[0, 0, 8]}
      mb={[0, 0, 8]}
      mx="auto"
    >
      <Flex>
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
      </Flex>
    </StickyNav>
  );
};

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export default Header;
