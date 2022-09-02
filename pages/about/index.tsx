import { GetServerSideProps } from 'next'
import React, { useEffect } from 'react'
import Wrapper from '../../app/components/wrapper'
import Digits from '../../app/pages/about/Digits'
import Hero from '../../app/pages/about/Hero'
import Solutions from '../../app/pages/about/Solutions'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../nex-i18next.config'
import { EurasiaData } from '../../app/services/Services'

const AboutPage = ({hero,digits,solutions}) => {
 
  return (
    <Wrapper>
        <Hero hero = {hero}/>
        <Digits digits = {digits}/>
        <Solutions solutions = {solutions}/>
    </Wrapper>
  )
}
export const getServerSideProps: GetServerSideProps = async ({locale})=>{
  let hero;
  let digits;
  let solutions;

  try{
    const AboutHeroData = await EurasiaData.getAboutCompanyMain(locale ?? "ru")
    const AboutDigitsData = await EurasiaData.getAboutCompanyDigits(locale ?? "ru")
    const AboutSolutionsData = await EurasiaData.getAboutCompanySolutions(locale ?? "ru")
    hero = await AboutHeroData.data.data
    digits = await AboutDigitsData.data.data
    solutions = await AboutSolutionsData.data.data
    return {
      props: {
        ...(await serverSideTranslations(
          locale as string,
          [],
          nextI18NextConfig
        )),hero,digits,solutions
        
      }
    }
  }catch{
    return {
      notFound: true
    }
  }
  
}
export default AboutPage

