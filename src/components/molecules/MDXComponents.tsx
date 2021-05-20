import Link from 'next/link';
import Image from 'next/image';
import { Tweet } from 'react-twitter-widgets';

const CustomLink = (props) => {
  const { href, children } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

const MDXComponents = {
  a: CustomLink,
  // addtinal components
  Tweet,
  Image,
};

export default MDXComponents;
