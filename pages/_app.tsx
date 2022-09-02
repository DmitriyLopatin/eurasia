import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {appWithTranslation} from 'next-i18next'
import { GetServerSideProps } from 'next';

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

export default appWithTranslation(MyApp) 

export const getServerSideProps: GetServerSideProps = async (context)=>{
  return {
    props:{
      cookies:context.req.cookies ?? ""
    }
  }
}

