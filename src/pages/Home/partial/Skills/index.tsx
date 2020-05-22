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

import dataSkills from '../../../../components/Resources/skills';

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
            {dataSkills.map(skill => 
              <Card key={skill.title}>
                <CardIcone>
                  <img src={skill.icon} alt={skill.title}/>
                </CardIcone>
                <CardContent>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </CardContent>
              </Card>
            )}
          </ContainerWrapper>
        </Center>
      </Container>
    
    </>
  )
}

export default Skills;