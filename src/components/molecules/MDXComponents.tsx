import {
  Box,
  Alert,
  Code,
  Kbd,
  Link,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/core';
import Image from 'next/image';
import DocsHeading from 'components/atoms/DocsHeading';
import H1 from 'components/atoms/H1';

const Table = (props) => (
  <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
);

const THead = (props) => {
  const { colorMode } = useColorMode();
  const bg = {
    light: 'gray.50',
    dark: 'whiteAlpha.100',
  };

  return (
    <Box
      as="th"
      bg={bg[colorMode]}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  );
};

const TData = (props) => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const CustomLink = (props) => {
  const { href } = props;
  const isExternal = !(href && (href.startsWith('/') || href.startsWith('#')));

  return <Link isExternal={isExternal} {...props} color="primary.500" />;
};

const Quote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'primary.50',
    dark: 'primary.900',
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponents = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />,
  h3: (props) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  h4: (props) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
  h5: (props) => <DocsHeading as="h5" size="xs" fontWeight="bold" {...props} />,
  h6: (props) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
  inlineCode: (props) => (
    <Code
      colorScheme="yellow"
      fontSize="0.84em"
      css={{ whiteSpace: 'pre-wrap' }}
      {...props}
    />
  ),
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => (
    <Box as="ul" pt={2} pl={4} ml={2} css={{ width: '100%' }} {...props} />
  ),
  ol: (props) => (
    <Box as="ol" pt={2} pl={4} ml={2} css={{ width: '100%' }} {...props} />
  ),
  li: (props) => <Box as="li" pb={1} css={{ width: '100%' }} {...props} />,
  blockquote: Quote,
  img: (props) => <Image {...props} unsized />,
};

export default MDXComponents;
