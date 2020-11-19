import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Box, Text } from '@chakra-ui/core';
import MainLayout from 'components/molecules/MainLayout';
import { defaultSeoConfig } from 'constants/seo';
import AvatarWithName from 'components/molecules/AvatarWithName';

const About: NextPage = () => {
  return (
    <>
      <NextSeo {...defaultSeoConfig} />
      <MainLayout>
        <Box p={4} maxW="auto">
          <AvatarWithName />

          <Box mt={4}>
            <Text>
              ベトナム・ハノイ在住のWebアプリケーションエンジニアです。
            </Text>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default About;
