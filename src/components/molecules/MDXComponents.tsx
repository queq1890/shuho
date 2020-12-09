import {
  Alert,
  Code,
  Kbd,
  Link,
  Divider,
  useColorMode,
} from '@chakra-ui/react';
import Image from 'next/image';
import DocsHeading from 'components/atoms/DocsHeading';
import H1 from 'components/atoms/H1';

const Table = (props) => <table className="text-left mt-6 w-max" {...props} />;

const THead = (props) => {
  return <th className="bg-gray-50 font-semibold p-2 text-sm" {...props} />;
};

const TData = (props) => (
  <td
    className="p-2 border-t	border-current text-sm whitespace-normal"
    {...props}
  />
);

const CustomLink = (props) => {
  const { href } = props;
  const isExternal = !(href && (href.startsWith('/') || href.startsWith('#')));

  return (
    <Link
      isExternal={isExternal}
      {...props}
      css={{ maxWidth: '100%' }}
      color="primary.500"
    />
  );
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

const CustomImage = (props) => {
  const { alt } = props;

  return (
    <figure>
      <Image {...props} unsized />
      <figcaption className="text-center text-gray-700 text-sm mb-2">
        {alt}
      </figcaption>
    </figure>
  );
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
  br: (props) => <div className="h-6" {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => <p className="mt-4 leading-6" {...props} />,
  ul: (props) => <ul className="pt-2 pl-4 ml-2 max-w-full" {...props} />,
  ol: (props) => <ol className="pt-2 pl-4 ml-2 max-w-full" {...props} />,
  li: (props) => <li className="pb-1 max-w-full list-disc" {...props} />,
  blockquote: Quote,
  img: CustomImage,
};

export default MDXComponents;
