import React from 'react'

import {
  Container,
  Center,
  ContainerWrapper,
  Logomarca,
  Navigation
} from './styles'

import logo from './../../assets/images/logo-simbulo.svg'

const Header: React.FC = () => {
  return(
    <Container>
      <Center>
        <ContainerWrapper>
          <Logomarca>
            <a href="#Banner">
             <img src={logo} alt="Logomarca Jonas Borges"/>
            </a>
          </Logomarca>
          <Navigation>
            <ul>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#training">Formação</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </Navigation>
        </ContainerWrapper>
      </Center>
    </Container>
  )
}

export default Header;