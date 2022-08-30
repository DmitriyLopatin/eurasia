import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary:{
      main: "rgb(110,182,60)"
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
}

export default MyApp

