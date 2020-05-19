import React from 'react'

import Banner from './partial/Banner';
import About from './partial/About';
import Skills from './partial/Skills';

import Training from './partial/Training';

const Home:React.FC = () => {
  return(
    <>
      <Banner />
      <About />
      <Skills />
      <Training />
    </>
  )
}

export default Home;