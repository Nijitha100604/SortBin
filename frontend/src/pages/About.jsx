import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutBannerTwo from '../components/AboutBannerTwo'
import CoreFeatures from '../components/coreFeatures'
import Technologies from '../components/Technologies'


const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutBannerTwo />
      <CoreFeatures />
      <Technologies />
    </div>
  )
}

export default About