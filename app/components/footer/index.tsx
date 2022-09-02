import React, { useEffect, useState } from 'react'
import { Facebook } from '../../icons/Facebook'
import Insta from '../../icons/Insta'
import { Youtube } from '../../icons/Youtube'
import { useRouter } from 'next/router'

const Footer = ({isContact = false}) => {
  const [headerContactUs, setHeaderContactUs] = useState(isContact)
  let router = useRouter()
  useEffect(() =>{
    window.addEventListener('resize', ()=>{
      if(window.innerWidth < 1160 && router.pathname.includes("/contact-us")){
          setHeaderContactUs(!headerContactUs)
      }else if(window.innerWidth > 1160 && router.pathname.includes("/contact-us")){
          setHeaderContactUs(headerContactUs)
      }
    })
  },[])
  return (
    <footer className={!headerContactUs?"footer footer__border":"footer"}>
      <p>© Eurasia Group 2022</p>
      <div className={!headerContactUs?'socials':'socials socials__contactUs'}>
          <span><Facebook/></span>
          <span><Insta/></span>
          <span><Youtube/></span>
      </div>
      </footer>
  )
}

export default Footer


