import React from 'react'
import ArrowUpSide from '../../icons/ArrowUpSide'


const Hero = ({hero}) => {
    // EurasiaData.getAboutCompanyHero().then(response=>console.log(response.data))
    console.log(hero)
    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='hero-text'>
                    <h1 >
                        <span className='heading-first'>{hero.title.split(' ')[0].toUpperCase()}</span>&#32;<span className='heading-second'>{hero.title.split(' ')[1].toUpperCase()}</span>
                    </h1>
                    <div dangerouslySetInnerHTML={{__html: hero.description}}/>
                    <button className='c-btn c-btn-outline-green'>СВЯЗАТЬСЯ С НАМИ <ArrowUpSide /></button>
                </div>
                <div className='img'><img src={hero.image} alt="" /></div>
            </div>
        </section>
    )
}

export default Hero