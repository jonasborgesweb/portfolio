import React from 'react';

import {
  Container,
  Center,
  ContainerTop,
  ContainerWrapper,
  Card,
  CardIcone,
  CardContent
} from './styles';

import iconHtml from '../../../../assets/icons/html.svg';
import iconCss from '../../../../assets/icons/css.svg';
import iconJavascript from '../../../../assets/icons/javascript.svg';
import iconSass from '../../../../assets/icons/sass.svg';
import iconReactjs from '../../../../assets/icons/reactjs.svg';
import iconReactnative from '../../../../assets/icons/reactnative.svg';

const Skills:React.FC = () => {
  return(
    <>
      <Container id="skills">
        <Center>
          <ContainerTop>
            <h2>Skills</h2>
            <p>
              Linguagens, ferramentas e frameworks que trabalho e estudo 
              focado no front-end da aplicação
            </p>
          </ContainerTop>
          <ContainerWrapper>
            <Card>
              <CardIcone>
                <img src={iconHtml} alt="Icone HTML"/>
              </CardIcone>
              <CardContent>
                <h3>HTML</h3>
                <p>
                  Linguagem de marcação utilizada na construção de páginas na 
                  Web. Junto com CSS é onde eu mais tenho experiência, 
                  estudando-a em cursos e praticando com a criação de sites.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardIcone>
                <img src={iconCss} alt="Icone CSS"/>
              </CardIcone>
              <CardContent>
                <h3>CSS</h3>
                <p>
                  Linguagem de marcação utilizada na construção de páginas na 
                  Web. em cursos e praticando com a criação de sites.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardIcone>
                <img src={iconJavascript} alt="Icone Javascript"/>
              </CardIcone>
              <CardContent>
                <h3>Javascript</h3>
                <p>
                  Linguagem de marcação utilizada na construção de páginas na 
                  Web. Junto com CSS é onde eu mais tenho experiência, 
                  estudando-a em cursos e praticando com a criação de sites.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardIcone>
                <img src={iconSass} alt="Icone SASS"/>
              </CardIcone>
              <CardContent>
                <h3>Sass</h3>
                <p>
                  Linguagem de marcação utilizada na construção de páginas na 
                  Web. Junto com CSS é onde eu mais tenho experiência, 
                  estudando-a em cursos e praticando com a criação de sites.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardIcone>
                <img src={iconReactjs} alt="Icone Reactjs"/>
              </CardIcone>
              <CardContent>
                <h3>ReactJS</h3>
                <p>
                  Linguagem de marcação utilizada na construção de páginas na 
                  Web. Junto com CSS é onde eu mais tenho experiência, 
                  estudando-a em cursos e praticando com a criação de sites.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardIcone>
                <img src={iconReactnative} alt="Icone Reactnative"/>
              </CardIcone>
              <CardContent>
                <h3>React Native</h3>
                <p>
                  Linguagem de marcação utilizada na construção de páginas na 
                  Web. Junto com CSS é onde eu mais tenho experiência, 
                  estudando-a em cursos e praticando com a criação de sites.
                </p>
              </CardContent>
            </Card>
          </ContainerWrapper>
        </Center>
      </Container>
    
    </>
  )
}

export default Skills;