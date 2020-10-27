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
            src="/static/images/avatar.jpeg"
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
