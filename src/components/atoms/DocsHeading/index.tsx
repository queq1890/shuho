import { createElement, memo, FC } from 'react';

type Props = {
  id: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'sm' | 'base' | 'xl' | '3xl';
};

const DocsHeading: FC<Props> = ({ as, children, id, size }) => {
  const Heading = createElement(
    as,
    {
      className: `mb-2 lg:mb-4 mt-4 lg:mt-8 font-bold text-${size} max-w-full`,
      id,
    },

    <div className="pointer-events-auto">
      {children}
      {id && (
        <a
          className="text-primary-500 font-normal outline-none ml-1.5 opacity-0 focus:opacity-100 shadow"
          aria-label="anchor"
          href={`#${id}`}
        >
          #
        </a>
      )}
    </div>
  );

  return Heading;
};

export default memo(DocsHeading);
