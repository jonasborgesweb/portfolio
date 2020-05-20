import React from 'react';
import {FaWhatsapp, FaInstagram} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

import {
  Center,
  Container,
  ContainerTop,
  ContainerWrapper,
  Card,
  CardContent,
  CardIcone
} from './styles'

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
            <Card>
              <CardIcone>
                <FaWhatsapp size={50} />
              </CardIcone>
              <CardContent>
                <h3>Whatsapp</h3>
                <p>
                  (24) 99966 - 0042
                </p>
                <a href='https://api.whatsapp.com/send?1=pt_BR&phone=5524999660042' target="blank">
                  <FaWhatsapp size={20} />
                  Whatsapp
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardIcone>
                <FiMail size={50} />
              </CardIcone>
              <CardContent>
                <h3>E-mail</h3>
                <p>
                  jonas.borges93@hotmail.com
                </p>
                <a href='mailto: jonas.borges93@hotmail.com'>
                  <FiMail size={20} />
                  E-mail
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardIcone>
                <FaInstagram size={50} />
              </CardIcone>
              <CardContent>
                <h3>Instagram</h3>
                <p>
                  @jonasborgesweb
                </p>
                <a href='https://www.instagram.com/jonasborgesweb/' target="blank">
                  <FaInstagram size={20} />
                  Acessar
                </a>
              </CardContent>
            </Card>
          </ContainerWrapper>
        </Center>
      </Container>
    </>
  )
}

export default Contact;