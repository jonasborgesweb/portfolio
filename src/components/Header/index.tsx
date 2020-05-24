import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa'

import {
  Container,
  Center,
  ContainerWrapper,
  Logomarca,
  Button,
  Navigation
} from './styles'

import logo from './../../assets/images/logo-simbulo-branco.svg'

const Header: React.FC = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return(
    <Container>
      <Center>
        <ContainerWrapper>
          <Logomarca onClick={()=>setIsMenuOpen(false)}>
            <a href="#Banner">
             <img src={logo} alt="Logomarca Jonas Borges"/>
            </a>
          </Logomarca>
          <Button type="button" onClick={()=>setIsMenuOpen(true)}>
            <FaBars size={25}/>
          </Button>
          {
            isMenuOpen &&
              <Navigation>
              <ul>
                <li>
                  <a href="#Banner" onClick={()=>setIsMenuOpen(false)}>Home</a>
                </li>
                <li>
                  <a href="#about" onClick={()=>setIsMenuOpen(false)}>Sobre mim</a>
                </li>
                <li>
                  <a href="#skills" onClick={()=>setIsMenuOpen(false)}>Skills</a>
                </li>
                <li>
                  <a href="#projects"onClick={()=>setIsMenuOpen(false)}>Projetos</a>
                </li>
                <li>
                  <a href="#training"onClick={()=>setIsMenuOpen(false)}>Formação</a>
                </li>
                <li>
                  <a href="#contact"onClick={()=>setIsMenuOpen(false)}>Contato</a>
                </li>
              </ul>
            </Navigation>
          }
        </ContainerWrapper>
      </Center>
    </Container>
  )
}

export default Header;