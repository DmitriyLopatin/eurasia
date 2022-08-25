import React from 'react'
import ArrowUpSide from '../../icons/ArrowUpSide'

const OurMission = () => {
  return (
    <section className='hero'>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1 >
            <span className='heading-first'>НАША</span>&#32;<span className='heading-second'>МИССИЯ</span>
          </h1>
          <p>Мы кормим мир, помогая фермерам внедрять и применять инновационные решения для развития сельского хозяйства и производства продукции наивысшего качества</p>
        
          <button className='c-btn c-btn-outline-green'>СВЯЗАТЬСЯ С НАМИ <ArrowUpSide /></button>
        </div>
        <div className='img'><img src='assets/images/Our-mission_bg.png' alt="" /></div>
      </div>
    </section>
  )
}

export default OurMission