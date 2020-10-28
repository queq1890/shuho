import { FC } from 'react';
import { format } from 'date-fns';
import _Image from 'next/image';
import styled from '@emotion/styled';
import { Flex, Text, Box } from '@chakra-ui/core';
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
          <Box mr={2}>
            <Image src="/static/images/avatar.jpeg" width={24} height={24} />
          </Box>
          <Text fontSize="sm">
            {'Yuji Matsumoto / '}
            {format(publishedAt, 'MMMM dd, yyyy')}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Image = styled(_Image)`
  border-radius: 9999px;
`;

export default BlogPostTitle;
