import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <header>
        <div className='burger-btn'>
            <p></p>
            <p></p>
        </div>
        <Link href='/'><img src="/assets/images/Logo.svg" alt="" /></Link>
        <span className='language'>RU</span>
    </header>
  )
}

export default Header