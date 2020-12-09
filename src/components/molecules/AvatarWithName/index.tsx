import Image from 'next/image';
import { HStack } from '@chakra-ui/react';
import GitHubIcon from 'components/molecules/GitHubIcon';
import TwitterIcon from '../TwitterIcon';

import styles from './AvatarWithName.module.scss';

const AvatarWithName = () => {
  return (
    <div className="flex">
      <div className={styles['img-container']}>
        <Image src="/static/images/avatar.jpeg" width={100} height={100} />
      </div>

      <div className="flex flex-col ml-4 items-center">
        <div>
          <div className="flex flex-col items-start lg:items-center">
            <p className="text-2xl lg:text-3xl font-bold">Yuji Matsumoto</p>

            <p className="text-xl text-gray-500 ml-1">@queq1890</p>
          </div>

          <HStack alignItems="center" spacing={2} mt={1}>
            <a
              href="https://github.com/queq1890"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <GitHubIcon color="gray.500" />
            </a>
            <a
              href="https://twitter.com/queq1890"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <TwitterIcon color="gray.500" />
            </a>
          </HStack>
        </div>
      </div>
    </div>
  );
};

export default AvatarWithName;
