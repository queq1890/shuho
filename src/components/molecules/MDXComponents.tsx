import {
  Box,
  Alert,
  Code,
  Heading,
  Kbd,
  Link,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/core';
import NextLink from 'next/link';

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
  const { colorMode } = useColorMode();
  const color = {
    light: 'primary.400',
    dark: 'hsl(208, 95%, 68%)',
  };

  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
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

const DocsHeading = (props) => {
  const { children, id } = props;

  return (
    <Heading
      css={{
        scrollMarginTop: '100px',
        scrollSnapMargin: '100px', // Safari
        '&[id]': {
          pointerEvents: 'none',
        },
        // '&[id]:before': {
        //   display: 'block',
        //   height: ' 6rem',
        //   marginTop: '-6rem',
        //   visibility: 'hidden',
        //   content: '""',
        // },
        '&[id]:hover a': { opacity: 1 },
      }}
      {...props}
      mb={['0.5em', '0.5em', '1em']}
      mt={['1em', '1em', '2em']}
    >
      <Box pointerEvents="auto">
        {children}
        {id && (
          <Box
            aria-label="anchor"
            as="a"
            color="primary.400"
            fontWeight="normal"
            outline="none"
            _focus={{
              opacity: 1,
              boxShadow: 'outline',
            }}
            opacity={0}
            ml="0.375rem"
          >
            <Link href={`#${id}`}>#</Link>
          </Box>
        )}
      </Box>
    </Heading>
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
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />,
  h3: (props) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  h4: (props) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
  h5: (props) => <DocsHeading as="h5" size="xs" fontWeight="bold" {...props} />,
  h6: (props) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
  inlineCode: (props) => (
    <Code colorScheme="yellow" fontSize="0.84em" {...props} />
  ),
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
};

export default MDXComponents;
