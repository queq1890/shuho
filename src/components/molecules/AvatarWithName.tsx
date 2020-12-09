import Image from 'next/image';
import { Box, Text, Link, HStack } from '@chakra-ui/react';
import GitHubIcon from 'components/molecules/GitHubIcon';
import TwitterIcon from './TwitterIcon';

const AvatarWithName = () => {
  return (
    <div className="flex">
      <Box
        css={{
          img: {
            borderRadius: '50%',
          },
        }}
      >
        <Image src="/static/images/avatar.jpeg" width={100} height={100} />
      </Box>

      <div className="flex flex-col ml-4 items-center">
        <Box>
          <div className="flex flex-col items-start lg:items-center">
            <Text fontSize={['2xl', '2xl', '3xl']} fontWeight="bold">
              Yuji Matsumoto
            </Text>

            <Text fontSize="xl" color="gray.500" ml={1}>
              @queq1890
            </Text>
          </div>

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
      </div>
    </div>
  );
};

export default AvatarWithName;
