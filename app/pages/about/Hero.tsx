import React from 'react'
import ArrowUpSide from '../../icons/ArrowUpSide'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='hero-text'>
                    <h1 >
                        <span className='heading-first'>EURASIA</span>&#32;<span className='heading-second'>GROUP</span>
                    </h1>
                    <p>Сегодня мы — единственная компания на казахстанском сельскохозяйственном рынке, которая уже более 20-ти лет с гордостью представляет лучшую технику от мировых лидеров, таких как:</p>
                    <ul>
                        <li>John Deere (США)</li>
                        <li>Lindsay Irrigation (США)</li>
                        <li>JCB (Великобритания)</li>
                        <li>Grimme (Германия)</li>
                        <li>Väderstad (Швеция)</li>
                    </ul>
                    <button className='c-btn c-btn-mobile'>СВЯЗАТЬСЯ С НАМИ <ArrowUpSide /></button>
                </div>
                <div className='img'><img src='assets/images/Hero.svg' alt="" /></div>
            </div>
        </section>
    )
}

export default Hero