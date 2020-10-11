import { Typography } from '@material-ui/core';

const headingVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const headings = headingVariants.reduce((prev, variant) => {
  return {
    ...prev,
    [variant]: (props) => <Typography variant={variant} {...props} />,
  };
}, {});

const MDXComponents = {
  ...headings,
  p: (props) => <Typography variant="body1" {...props} />,
};

export default MDXComponents;
