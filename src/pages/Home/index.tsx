import React from 'react'

import Banner from './partial/Banner';
import About from './partial/About';
import Skills from './partial/Skills';
import Projects from './partial/Projects'
import Training from './partial/Training';
import Contact from './partial/Contact';

const Home:React.FC = () => {
  return(
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Contact />
    </>
  )
}

export default Home;