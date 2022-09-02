import React from 'react'
import Wrapper from '../../app/components/wrapper'
import BlogItem from '../../app/pages/blogItem/BlogItem'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../nex-i18next.config'
import { GetServerSideProps } from 'next'

const idBlogItem = () => {
    return (
        <Wrapper>
            <BlogItem/>
        </Wrapper>
    )
}

export default idBlogItem

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