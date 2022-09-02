import React from 'react'
import Wrapper from '../../app/components/wrapper'
import OurMission from '../../app/pages/our-mission/Hero'
import Worth from '../../app/pages/our-mission/Worth'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../nex-i18next.config'
import { GetServerSideProps } from 'next'
import { EurasiaData } from '../../app/services/Services'

const OurMissionPage = ({hero,worth}) => {
  return (
    <Wrapper>
      <OurMission hero = {hero}/>
      <Worth worth = {worth}/>
    </Wrapper>
  )
}

export default OurMissionPage

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let hero;
  let worth;
  try {
    const ourMissionHeroData = await EurasiaData.getOurMissionMain(locale ?? 'ru')
    const ourMissionWorthData = await EurasiaData.getOurMissionValues(locale ?? 'ru')
    hero = await ourMissionHeroData.data.data
    worth = await ourMissionWorthData.data.data
    return {
      props: {
        ...(await serverSideTranslations(
          locale as string,
          [],
          nextI18NextConfig
        )),hero,worth
      }
    }
  }catch{
    return {
      notFound: true
    }
  }
 
}