import React from 'react'
import Footer from '../footer'
import Header from '../header/Header'

interface Props  {
  children: React.ReactNode;
  title?: string;
  isContact: boolean;
}

const Wrapper: React.FC<Props> = ({ children, isContact}) => {
  
  return (
      <>
        <Header isContact={isContact}/>
          {children}
        <Footer isContact={isContact}/>
      </>
  )
}

export default Wrapper
