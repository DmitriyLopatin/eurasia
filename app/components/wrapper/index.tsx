import React from 'react'
import Footer from '../footer'
import Header from '../header'

type Props ={
  children: React.ReactNode;
  title?: string;
}

const Wrapper: React.FC<Props> = ({children}) => {
  return (
    <>
        <Header />
          {children}
        <Footer />
    </>
  )
}

export default Wrapper
