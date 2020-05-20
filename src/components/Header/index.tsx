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
            <img src={logo} alt="Logomarca Jonas Borges"/>
          </Logomarca>
          <Navigation>
            <ul>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
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