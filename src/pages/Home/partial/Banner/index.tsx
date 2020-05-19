import React from 'react';

import {FiChevronDown} from 'react-icons/fi';

import {
  Container,
  Center,
  Content
} from './styles'

const Banner:React.FC = () => {
  return(
    <Container>
      <Center>
        <Content>
         <h2>Jonas Borges</h2>
         <h1>Desenvolvedor Front-End</h1>
         <a href="#about">Sobre mim</a>
        </Content>
        <FiChevronDown size={70} /> 
      </Center>
    </Container>
  )
}

export default Banner;