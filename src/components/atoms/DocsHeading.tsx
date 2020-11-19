import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

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
      <Box pointerEvents="auto">
        {children}
        {id && (
          <Box
            aria-label="anchor"
            as="a"
            color="primary.500"
            fontWeight="normal"
            outline="none"
            _focus={{
              opacity: 1,
              boxShadow: 'outline',
            }}
            opacity={0}
            ml="0.375rem"
            href={`#${id}`}
          >
            #
          </Box>
        )}
      </Box>
    </Heading>
  );
};

export default DocsHeading;
