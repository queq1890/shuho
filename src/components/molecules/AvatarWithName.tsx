import Image from 'next/image';
import { Box, Flex, Text, Link, HStack } from '@chakra-ui/react';
import GitHubIcon from 'components/molecules/GitHubIcon';
import TwitterIcon from './TwitterIcon';

const AvatarWithName = () => {
  return (
    <Flex>
      <Box
        css={{
          img: {
            borderRadius: '50%',
          },
        }}
      >
        <Image src="/static/images/avatar.jpeg" width={100} height={100} />
      </Box>
      <Flex
        ml={4}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Flex
            alignItems={['left', 'left', 'center']}
            direction={['column', 'column', 'row']}
          >
            <Text fontSize={['2xl', '2xl', '3xl']} fontWeight="bold">
              Yuji Matsumoto
            </Text>

            <Text fontSize="xl" color="gray.500" ml={1}>
              @queq1890
            </Text>
          </Flex>

          <HStack alignItems="center" spacing={2} mt={1}>
            <Link
              href="https://github.com/queq1890"
              title="GitHub"
              isExternal
              textDecoration="none"
            >
              <GitHubIcon color="gray.500" />
            </Link>
            <Link
              href="https://twitter.com/queq1890"
              title="Twitter"
              isExternal
              textDecoration="none"
            >
              <TwitterIcon color="gray.500" />
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AvatarWithName;
