import React from 'react'
import { Facebook } from '../../icons/Facebook'
import Insta from '../../icons/Insta'
import { Youtube } from '../../icons/Youtube'

const Footer = () => {
  return (
    <footer>
      <p>© Eurasia Group 2022</p>
      <div className='socials'>
          <span><Facebook/></span>
          <span><Insta/></span>
          <span><Youtube/></span>
      </div>
      </footer>
  )
}

export default Footer