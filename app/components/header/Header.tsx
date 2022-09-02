import ArrowLeft from '../../icons/ArrowLeft';
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { SyntheticEvent, useEffect, useState, useTransition } from 'react'
import { set } from 'react-hook-form'
import ArrowUpSide from '../../icons/ArrowUpSide'
import Close from '../../icons/Close'
import FacebookMenu from '../../icons/FacebookMenu'
import InstaMenu from '../../icons/InstaMenu'
import YoutubeMenu from '../../icons/YoutubeMenu'
import { useTranslation } from 'next-i18next'


const Header = ({ isContact = false }) => {
  const { t, i18n } = useTranslation()
  let [menuShow, setMenuShow] = useState(true)
  let [languageShow, setLanguageShow] = useState(false)
  const [headerContactUs, setHeaderContactUs] = useState(isContact)
  let router = useRouter()
  let {pathname, asPath,query} = router

  function handleLanguageMenu() {
    setLanguageShow(!languageShow)
  }
  function changeLocale(lang: "ru" | "kz" | "en", event: SyntheticEvent) {
    event.preventDefault()
    router.push({pathname, query}, asPath, {locale: lang})
  }
  function getCurrentLanguge(lang: string) {
    console.log(lang)
    switch (lang) {
      case 'ru': return 'RU'
      case 'en': return 'EN'
      case 'kz': return 'KZ'
    }
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

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1160 && router.pathname.includes("/contact-us")) {
        setHeaderContactUs(!headerContactUs)
      } else if (window.innerWidth > 1160 && router.pathname.includes("/contact-us")) {
        setHeaderContactUs(headerContactUs)
      }
    })
  }, [])

  console.log(isContact)
  return (
    <>
      <header className={!headerContactUs ? "header header__border" : "header"}>
        <div className='header__contactUs'>
          <div className='burger-btn' onClick={() => setMenuShow(!menuShow)}>
            <p></p>
            <p></p>
          </div>
          {headerContactUs ? <Link href='/'><img src="/assets/images/Logo.svg" alt="" /></Link> : null}
        </div>
        {!headerContactUs ? <Link href='/'><img src="/assets/images/Logo.svg" alt="" /></Link> : null}
        {headerContactUs ? <Link href='/'><button className='c-btn c-btn-outline-white'><ArrowLeft /> НА ГЛАВНУЮ</button></Link> : null}
        <span className={!headerContactUs ? 'language' : 'language language__contactUs'} onClick={(e) => { setLanguageShow(!languageShow); e.stopPropagation() }}>
          {getCurrentLanguge(i18n.language)}
        </span>
        <ul className={languageShow ? 'languageMenuShow' : 'languageMenu'}>
          <li onClick={(e)=>changeLocale('kz', e)}>Қазақ тілі</li>
          <li onClick={(e)=>changeLocale('en', e)}>English</li>
          <li onClick={(e)=>changeLocale('ru', e)}>Русский язык</li>
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