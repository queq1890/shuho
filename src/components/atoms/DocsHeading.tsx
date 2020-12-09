import { FC } from 'react';
import { Heading } from '@chakra-ui/react';

type Props = {
  id: string;
};

const DocsHeading: FC<Props> = (props) => {
  const { children, id } = props;

  return (
    <Heading
      css={{
        maxWidth: '100%',
        scrollMarginTop: '100px',
        scrollSnapMargin: '100px', // Safari
        '&[id]': {
          pointerEvents: 'none',
        },
        '&[id]:hover a': { opacity: 1 },
      }}
      {...props}
      mb={['0.5em', '0.5em', '1em']}
      mt={['1em', '1em', '2em']}
    >
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
    </Heading>
  );
};

export default DocsHeading;
