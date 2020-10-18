import { FC } from 'react';
import { format } from 'date-fns';
import { Flex, Avatar, Text } from '@chakra-ui/core';
import H1 from 'components/atoms/H1';

type Props = {
  title: string;
  publishedAt: Date;
};

const BlogPostTitle: FC<Props> = ({ title, publishedAt }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
      w="100%"
    >
      <H1>{title}</H1>
      <Flex
        justify="space-between"
        align={['initial', 'center']}
        direction={['column', 'row']}
        mt={2}
        w="100%"
        mb={4}
      >
        <Flex align="center">
          <Avatar
            size="xs"
            name="Yuji Matsumoto"
            src="https://avatars0.githubusercontent.com/u/32263803?s=460&u=8a8968e81ba9c2287c465187d0022d81a300397c&v=4"
            mr={2}
          />
          <Text fontSize="sm">
            {'Yuji Matsumoto / '}
            {format(publishedAt, 'MMMM dd, yyyy')}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BlogPostTitle;
