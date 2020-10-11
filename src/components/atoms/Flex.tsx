import { FC } from 'react';
import styled from '@emotion/styled';

type FlexProps = {
  height?: string;
  width?: string;
  flexBasis?: 'auto' | 'content' | 'max-content' | 'min-content' | string;
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

type Props = FlexProps;

const Flex: FC<Props> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

const Container = styled('div')<FlexProps>(
  ({
    height = '100%',
    flexBasis = 'auto',
    flexDirection = 'column',
    flexGrow = 0,
    flexShrink = 1,
    flexWrap = 'nowrap',
  }) => ({
    display: 'flex',
    height,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
  })
);

export default Flex;
