import React from 'react'
import Wrapper from '../../app/components/wrapper'
import ContactUs from '../../app/pages/contact-us/ContactUs'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../nex-i18next.config'
import { GetServerSideProps } from 'next'


const ContactUsPage = () => {

  return (
        <Wrapper isContact>
          <ContactUs/>
        </Wrapper>
  )
}

export default ContactUsPage

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