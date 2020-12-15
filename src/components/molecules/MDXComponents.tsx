import DocsHeading from 'components/atoms/DocsHeading';
import H1 from 'components/atoms/H1';
import Quote from 'components/atoms/Quote';
import { Tweet } from 'react-twitter-widgets';

// FIXME: stop props spreading

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
  const { children, href } = props;
  const isExternal = !(href && (href.startsWith('/') || href.startsWith('#')));

  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      className="max-w-full text-primary-500 break-words"
      {...props}
      {...externalProps}
    >
      {children}
    </a>
  );
};

const Hr = () => {
  return <hr className="border-top border-gray-200 my-4 w-full" />;
};

const MDXComponents = {
  // for markdown elements
  h1: (props) => <H1 {...props} />,
  h2: (props) => <DocsHeading as="h2" size="3xl" {...props} />,
  h3: (props) => <DocsHeading as="h3" size="xl" {...props} />,
  h4: (props) => <DocsHeading as="h4" size="base" {...props} />,
  h5: (props) => <DocsHeading as="h5" size="sm" {...props} />,
  h6: (props) => <DocsHeading as="h6" size="sm" {...props} />,
  inlineCode: (props) => (
    <code
      className="whitespace-prewrap bg-yellow-100 text-yellow-900 mdx-inline-code text-xs px-1 py-0.5"
      {...props}
    />
  ),
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

  // addtinal components
  Tweet,
  Image,
};

export default MDXComponents;
