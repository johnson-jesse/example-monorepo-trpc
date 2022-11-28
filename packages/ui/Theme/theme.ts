import { orange } from '@mui/material/colors';
import createTheme from '@mui/material/styles/createTheme';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: orange[500]
  },
  palette: {
    mode: 'dark'
  }
});

export default theme;
