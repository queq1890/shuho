import { createElement, memo, ReactNode } from 'react';

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'sm' | 'base' | 'xl' | '3xl';
  children: ReactNode;
};

const DocsHeading = ({ as, children, size }: Props) => {
  const Heading = createElement(
    as,
    {
      className: `mb-2 lg:mb-4 mt-4 lg:mt-8 font-bold text-${size} max-w-full`,
    },

    <div className="pointer-events-auto">{children}</div>
  );

  return Heading;
};

export default memo(DocsHeading);
