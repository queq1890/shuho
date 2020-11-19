import { Heading } from '@chakra-ui/react';

const H1 = (props) => {
  return (
    <Heading as="h1" size="2xl" my={4} css={{ maxWidth: '100%' }} {...props} />
  );
};

export default H1;
