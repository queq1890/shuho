import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Rubik from '../../public/fonts/Rubik-Regular.ttf';

const rubik = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('Rubik'),
    local('Rubik-Regular'),
    url(${Rubik}) format('ttf')
  `,
};

const palette = {
  primary: {
    main: '#0336ff',
  },
  secondary: {
    main: '#ff0266',
  },
  // error: {},
  // warning: {},
  // info: {},
  // success: {},
};

const typography = {
  fontFamily: 'Rubik',
  h1: {
    fontWeight: 700,
  },
  h2: {
    fontWeight: 700,
  },
  h3: {
    fontWeight: 400,
  },
  h4: {
    fontWeight: 400,
  },
  h5: {
    fontWeight: 400,
  },
  h6: {
    fontWeight: 400,
  },
};

const overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': [rubik],
    },
  },
};

const theme = responsiveFontSizes(
  createMuiTheme({
    palette,
    typography,
    overrides,
  })
);

export default theme;
