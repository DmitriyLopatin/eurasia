import type { NextPage } from 'next'
import Wrapper from '../app/components/wrapper'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../nex-i18next.config'
import { GetServerSideProps } from 'next'
const Home: NextPage = () => {
  return (
    <Wrapper>
      <h1 style={{
        textAlign:"center",
      }}>Home page has not been designed at this time((((</h1>
    </Wrapper>
  )
}
export const getServerSideProps: GetServerSideProps = async ({locale})=>{
  return {
    props: {
      ...(await serverSideTranslations(
        locale as string,
        [],
        nextI18NextConfig
      ))
    }
  }
}
export default Home
