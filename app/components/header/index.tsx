import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ArrowUpSide from '../../icons/ArrowUpSide'
import Close from '../../icons/Close'
import FacebookMenu from '../../icons/FacebookMenu'
import InstaMenu from '../../icons/InstaMenu'
import YoutubeMenu from '../../icons/YoutubeMenu'


const Header = () => {
  let [menuShow, setMenuShow] = useState(true)
  let [languageShow, setLanguageShow] = useState(false)
 
  
  function handleLanguageMenu(){
    setLanguageShow(!languageShow)
    console.log('true')
  } 

 useEffect(()=>{
    !menuShow ? document.body.style.overflow = 'hidden ': document.body.style.overflow = 'scroll'
    if(languageShow){
      window.addEventListener('click', handleLanguageMenu)
    } 
    return () =>{
      window.removeEventListener('click', handleLanguageMenu);
    };
 },[languageShow])

 useEffect(()=>{
    !menuShow ? document.body.style.overflow = 'hidden ': document.body.style.overflow = 'scroll'
 },[menuShow])

  return (
    <>
      <header>
        <div className='burger-btn' onClick={()=>setMenuShow(!menuShow)}>
          <p></p>
          <p></p>
        </div>
        <Link href='/'><img src="/assets/images/Logo.svg" alt="" /></Link>
        <span className='language' onClick={(e)=>{
          setLanguageShow(!languageShow)
          e.stopPropagation()
          }
          }>RU</span>
        <ul className={languageShow?'languageMenuShow': 'languageMenu'}> 
          <li>Қазақ тілі</li>
          <li>English</li>
          <li>Русский язык</li>
        </ul>
      </header>
     
        <div className={menuShow?'menu': 'menu menu-active'} onClick={()=>setMenuShow(!menuShow)}>
          <div className='menu-container' onClick={e=>e.stopPropagation()}>
            <div className='menu-main'>
              <span className='menu-close' onClick={()=>setMenuShow(!menuShow)}><Close /></span>
              <ul>
                <Link href='/'><li>О КОМПАНИИ</li></Link>
                <Link href='/'><li>НАША МИССИЯ</li></Link>
                <Link href='/'><li>ЧТО НОВОГО</li></Link>
              </ul>
              <button className='c-btn-menu'>СВЯЗАТЬСЯ С НАМИ <ArrowUpSide /></button>
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