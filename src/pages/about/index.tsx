import { NextPage } from 'next';
import Header from 'components/molecules/Header';

// TODO: implement
const About: NextPage = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default About;
