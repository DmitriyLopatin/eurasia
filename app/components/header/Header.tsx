import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ArrowUpSide from '../../icons/ArrowUpSide'
import Close from '../../icons/Close'
import FacebookMenu from '../../icons/FacebookMenu'
import InstaMenu from '../../icons/InstaMenu'
import YoutubeMenu from '../../icons/YoutubeMenu'


const Header = ({isContact = false}) => {
  let [menuShow, setMenuShow] = useState(true)
  let [languageShow, setLanguageShow] = useState(false)


  function handleLanguageMenu() {
    setLanguageShow(!languageShow)
  }

  useEffect(() => {
    !menuShow ? document.body.style.overflow = 'hidden ' : document.body.style.overflow = 'visible'
    if (languageShow) {
      window.addEventListener('click', handleLanguageMenu)
    }
    return () => {
      window.removeEventListener('click', handleLanguageMenu);
    };
  }, [languageShow])

  useEffect(() => {
    !menuShow ? document.body.style.overflow = 'hidden ' : document.body.style.overflow = 'visible'
  }, [menuShow])

  console.log(isContact)

  return (
    <>
      <header className={!isContact?"header header__border":"header"}>
        <div className='header__contactUs'>
          <div className='burger-btn' onClick={() => setMenuShow(!menuShow)}>
            <p></p>
            <p></p>
          </div>
          {isContact?<Link href='/'><img src="/assets/images/Logo.svg" alt="" /></Link>:null}
        </div>
        {!isContact?<Link href='/'><img src="/assets/images/Logo.svg" alt="" /></Link>:null}
        <span className={!isContact?'language':'language language__contactUs'} onClick={(e) => { setLanguageShow(!languageShow); e.stopPropagation() }}>
          RU
        </span>
        <ul className={languageShow ? 'languageMenuShow' : 'languageMenu'}>
          <li>Қазақ тілі</li>
          <li>English</li>
          <li>Русский язык</li>
        </ul>
      </header>

      <div className={menuShow ? 'menu' : 'menu menu-active'} onClick={() => setMenuShow(!menuShow)}>
        <div className='menu-container' onClick={e => e.stopPropagation()}>
          <div className='menu-main'>
            <p className='menu-close'>
              <span onClick={() => setMenuShow(!menuShow)}><Close /></span>
            </p>
            <ul>
              <Link href='/about'><li>О КОМПАНИИ</li></Link>
              <Link href='/our-mission'><li>НАША МИССИЯ</li></Link>
              <Link href='/blogs'><li>ЧТО НОВОГО</li></Link>
            </ul>
            <Link href='/contact-us'><button className='c-btn c-btn-menu c-btn-outline-black'>СВЯЗАТЬСЯ С НАМИ <ArrowUpSide /></button></Link>
          </div>
          <div className='menu-footer'>
            <div className='menu-footer__socials'>
              <span><FacebookMenu /></span>
              <span><InstaMenu /></span>
              <span><YoutubeMenu /></span>
            </div>
            <p >© Eurasia Group 2022</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header