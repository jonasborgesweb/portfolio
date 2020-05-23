import React from 'react'

import {
  Container,
  Center,
  ContainerWrapper,
  Photo,
  Content,
  Bottom
} from './styles'

const About:React.FC = () => {
  return(
    <>
      <Container id="about">
        <Center>
        <ContainerWrapper>
          <Photo />
          <Content>
            <h2>
              Antes de tudo,
              <span>
                gostaria de me apresentar.
              </span>
            </h2>
            <p>
              Eu sou um Desenvolvedor Front-End do interior do estado do 
              Rio de Janeiro, Brasil. Gosto de transformar problemas complexos 
              em projetos simples, bonitos e intuitivos. Quando não estou 
              codificando ou desenhando telas, você me encontrará consumindo 
              tecnologia e conteúdos automotivos.
            </p>
            <Bottom>
              <a href="#portfolio">Portfolio</a>
              <a href="#training">Formação</a>
            </Bottom>
          </Content>
        </ContainerWrapper>
        </Center>
      </Container>
    </>
  )
}


export default About;