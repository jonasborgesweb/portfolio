import React from 'react';
import { RiCopyrightLine } from "react-icons/ri";

import logo from './../../assets/images/logo-branco.svg'

import {
  Container,
  Center, 
  ContainerWrapper,
  Logomarca,
  Copyright
} from './styles'

const Footer:React.FC = () =>{
  return (
    <Container>
      <Center>
      <ContainerWrapper>
        <Logomarca>
          <img src={logo} alt="Logomarca Jonas Borges Web"/>
        </Logomarca>
        <Copyright>
          <RiCopyrightLine size={25} />
          <p> {new Date().getFullYear()} - Todos os direitos reservados</p>
        </Copyright>
      </ContainerWrapper>
      </Center>
    </Container>
  )
}

export default Footer;