import { ThemeProvider } from '@mui/material';
import { ReactElement, ReactFragment, ReactPortal } from 'react';
import theme from './theme';

export default function ThemeProviders({
  children
}: {
  children: ReactElement | string | number | ReactFragment | ReactPortal;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
