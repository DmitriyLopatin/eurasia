import React from 'react'
import Wrapper from '../../app/components/wrapper'
import BlogsMAin from '../../app/pages/blogs/BlogsMAin'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../nex-i18next.config'
import { GetServerSideProps } from 'next'

const BlogsPage = () => {
  return (
    <Wrapper>
        <BlogsMAin/>
    </Wrapper>
  )
}

export default BlogsPage

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