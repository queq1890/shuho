import styled from '@emotion/styled';
import { Typography, Divider as _Divider } from '@material-ui/core';

const Heading = styled(Typography)({
  marginTop: '1rem !important',
  marginBottom: '2rem !important',
});

const P = styled(Typography)({
  marginTop: '2rem !important',
  marginBottom: '1rem !important',
});

const Divider = styled(_Divider)({
  marginTop: '1rem !important',
  marginBottom: '1rem !important',
});

const headingVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const headings = headingVariants.reduce((prev, variant) => {
  return {
    ...prev,
    [variant]: (props) => <Heading variant={variant} {...props} />,
  };
}, {});

const MDXComponents = {
  ...headings,
  p: (props) => <P variant="body1" {...props} />,
  hr: (props) => <Divider {...props} />,
};

export default MDXComponents;
