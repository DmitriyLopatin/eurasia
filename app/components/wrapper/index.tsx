import React from 'react'
import Footer from '../footer'
import Header from '../header/Header'

type Props ={
  children: React.ReactNode;
  title?: string;
  isContac:boolean;
}
// ReactNode, ReactElement, JSX.element
const Wrapper: React.FC<Props> = ({children,isContact}) => {
// const Wrapper = ({children, isContact}) => {
  return (
      <>
        <Header isContact/>
          {children}
        <Footer />
      </>
  )
}

export default Wrapper
