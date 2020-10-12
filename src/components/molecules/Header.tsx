import { FC } from 'react';
import NextLink from 'next/link';
import { Flex, Button, Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Header: FC = () => {
  return (
    <StickyNav
      bg="rgba(255, 255, 255, 0.8)"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="900px"
      width="100%"
      p={8}
      mt={[0, 8]}
      mb={8}
      mx="auto"
    >
      <Box>
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

        <NextLink href="/blog" passHref>
          <Button as="a" variant="ghost" p={[1, 4]}>
            Blog
          </Button>
        </NextLink>
      </Box>
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
