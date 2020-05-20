import React from 'react'

import Banner from './partial/Banner';
import About from './partial/About';
import Skills from './partial/Skills';

import Training from './partial/Training';
import Contact from './partial/Contact';

const Home:React.FC = () => {
  return(
    <>
      <Banner />
      <About />
      <Skills />
      <Training />
      <Contact />
    </>
  )
}

export default Home;