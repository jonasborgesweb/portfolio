import React from 'react';

import {
  Container,
  Center,
  ContainerTop,
  ContainerWrapper,
} from './styles'

import Project from './../../../../components/Project';

const Projects:React.FC = () => {
  return(
    <>
      <Container id="projects">
        <Center>
          <ContainerTop>
            <h2>Projetos</h2>
            <p>
              Grande parte do meu trabalho mais recente não pode ser compartilhado 
              publicamente, mas está disponível mediante solicitação.
            </p>
          </ContainerTop>
          <ContainerWrapper>
            <Project />
          </ContainerWrapper>
        </Center>
      </Container>
    </>
  )
}

export default Projects;