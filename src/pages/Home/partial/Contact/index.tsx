import React from 'react';

import {
  Center,
  Container,
  ContainerTop,
  ContainerWrapper,
  Card,
  CardContent,
  CardIcone
} from './styles';

import dataContact from '../../../../components/Resources/contact'

const Contact:React.FC = () => {
  return (
    <>
      <Container id="contact">
        <Center>
          <ContainerTop>
            <h2>Vamos trabalhar juntos!</h2>
            <p>
              Você pode entrar em contato comigo através de qualquer um desses canais.
            </p>
          </ContainerTop>
          <ContainerWrapper>
            {dataContact.map(item=>
              <Card key={item.title}>
                <CardIcone>
                  <img src={item.icon} alt={item.title}/>
                </CardIcone>
                <CardContent>
                  <h3>{item.title}</h3>
                  <p>
                    {item.info}
                  </p>
                  <a href={item.url} target="blank">
                    <img src={item.iconButton} alt={item.title}/>
                    {item.button}
                  </a>
                </CardContent>
              </Card>
            )}  
          </ContainerWrapper>
        </Center>
      </Container>
    </>
  )
}

export default Contact;