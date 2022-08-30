import React from 'react'
import { Facebook } from '../../icons/Facebook'
import Insta from '../../icons/Insta'
import { Youtube } from '../../icons/Youtube'

const Footer = ({isContact = false}) => {
  return (
    <footer className={!isContact?"footer footer__border":"footer"}>
      <p>© Eurasia Group 2022</p>
      <div className={!isContact?'socials':'socials socials__contactUs'}>
          <span><Facebook/></span>
          <span><Insta/></span>
          <span><Youtube/></span>
      </div>
      </footer>
  )
}

export default Footer