import React from 'react';

import {
  Container,
  Center,
  ContainerTop,
  ContainerWrapper,
  Experience,
  Graduation
} from './styles'

const Training:React.FC = () => {
  return(
    <>
      <Container>
        <Center>
          <ContainerTop>
            <h2>Resumo</h2>
            <p>
              Estou sempre buscando novas técnologias para estudar e evoluindo 
              para o próximo nível
            </p>
          </ContainerTop>
          <ContainerWrapper>
            <Experience>
              <h2>Experiencia</h2>
            </Experience>
            <Graduation>
              <h2>Formação</h2>
            </Graduation>
          </ContainerWrapper>
        </Center>
      </Container>
    </>
  )
}

export default Training;