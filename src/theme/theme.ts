import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h3: {
      fontSize: '2rem'
    },
    h4: {
      fontSize: '1.4rem'
    },
    body1: {
      fontSize: '0.8rem'
    },
    overline: {
      fontSize: 'inherit',
      textTransform: 'inherit',
      fontWeight: '900',
    }
  },
});

export default theme;
