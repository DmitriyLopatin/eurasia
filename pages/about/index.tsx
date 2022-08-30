import React from 'react'
import Wrapper from '../../app/components/wrapper'
import Digits from '../../app/pages/about/Digits'
import Hero from '../../app/pages/about/Hero'
import Solutions from '../../app/pages/about/Solutions'

const AboutPage = () => {
  return (
    <Wrapper>
        <Hero/>
        <Digits/>
        <Solutions/>
    </Wrapper>
  )
}

export default AboutPage