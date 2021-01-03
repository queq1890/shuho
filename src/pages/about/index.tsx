import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import MainLayout from 'components/molecules/MainLayout';
import { defaultSeoConfig } from 'constants/seo';
import AvatarWithName from 'components/molecules/AvatarWithName';

const About: NextPage = () => {
  return (
    <>
      <NextSeo {...defaultSeoConfig} />
      <MainLayout>
        <div className="p-4 max-w-full">
          <AvatarWithName />

          <div className="mt-4">
            <p>ベトナム・ハノイ在住のWebアプリケーションエンジニアです。</p>
            <p>(工事中)</p>
          </div>
        </div>
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
