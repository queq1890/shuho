import { FC } from 'react';
import styled from '@emotion/styled';
import { Flex } from 'components/atoms';

const MainLayout: FC = ({ children }) => (
  <Flex>
    <Container>
      <Article>{children}</Article>
    </Container>
  </Flex>
);

const Container = styled('div')({
  paddingLeft: '2rem',
  paddingRight: '2rem',
});

const Article = styled('div')({
  margin: '0 auto 4rem auto',
  maxWidth: 700,
  width: '100%',
});

export default MainLayout;
