import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import {BsBriefcase} from 'react-icons/bs';

import {
  Container,
  Center,
  ContainerTop,
  ContainerWrapper,
  Experience,
  ExperienceTop,
  ExperienceContent,
} from './styles'

const Training:React.FC = () => {
  return(
    <>
      <Container id="training">
        <Center>
          <ContainerTop>
            <h2>Resumo</h2>
            <p>
              Estou sempre buscando novas tecnologias para estudar e evoluindo 
              para o próximo nível.
            </p>
          </ContainerTop>
          <ContainerWrapper>
            <Experience>
              <ExperienceTop>
                <div>
                  <BsBriefcase size={24} />
                </div>
                <h2>Experiência Profissional</h2>
              </ExperienceTop>
              <ExperienceContent>
                <ul>
                  <li>
                    <h3>Desenvolvedor Front-End</h3>
                    <strong>AM4 - Inteligência Digital de Resultados - Barra Mansa (Mai/2019 - Atual).</strong>
                    <p>
                      Sendo responsável pela manutenção e codificação do Front End dos projetos, 
                      utilizando HTML (Metodologia BEM), CSS, JavaScript, com frameworks e pré-processadores (SASS e LESS) ou nativamente. 
                      Ferramentas utilizadas: Visual Studio Code, Microsoft Visual Studio.
                    </p>
                  </li>
                  <li>
                    <h3>Estagiário de Desenvolvimento Web</h3>
                    <strong>Hattrick Comunicação - Resende  (Mar/2019 - Mai/2019).</strong>
                    <p>
                      Desenvolvimento de sites institucionais, sistemas para web, utilizando tecnologias como 
                      HTML, CSS, Jquery, PHP, MySQL. Utilizando Frameworks próprias de desenvolvimento. 
                      Criação e manutenção de soluções com Wordpress, tais como: temas e plugins.
                    </p>
                  </li>
                  <li>
                    <h3>Estagiário de T.I.</h3>
                    <strong>Núcleo de Tecnologia da Informação - Faculdades Dom Bosco (Mar/2018 - Mar/2019).</strong>
                    <p>
                      Atendendo a demanda e as necessidades da faculdade na área tecnológica, com o foco em desenvolvimento 
                      de soluções utilizando o gerenciador de conteúdo Wordpress, sites como: portal Acadêmico dos Alunos, 
                      Site do Colégio Aplicação, E-commerce para Venda de Curso de Extensão.
                    </p>
                    <p>
                      Exercendo atividades pertinentes ao Núcleo de Educação a distância (NEAD) no credenciamento, 
                      implantação, configuração e suporte das ferramentas SAGAH (Soluções Educacionais Integradas), 
                      para os cursos EAD da Faculdade Dom Bosco, tais como: catálogo de Unidades de Aprendizagem, 
                      Blackboard: Ambiente Virtual e Biblioteca A.
                    </p>
                  </li>
                  <li>
                    <h3>Estagiário de Suporte</h3>
                    <strong>Custom Sistemas (Jun/2017 - Fev/2018).</strong>
                    <p>
                      — Suporte nos Sistemas Betha na área de negócio contabilidade pública.<br/>
                      — Atendimento através das Ferramentas: Jira e Team Viewer.<br/>
                      — Instalação e Configuração dos Sistemas. 
                    </p>
                  </li>
                </ul>
              </ExperienceContent>
            </Experience>
            <Experience>
              <ExperienceTop>
                <div>
                  <FaGraduationCap size={30} />
                </div>
                <h2>Formação Acadêmica</h2>
              </ExperienceTop>
              <ExperienceContent>
                <ul>
                  <li>
                    <h3>Bootcamp GoStack, NodeJS, ReactJS, React Native</h3>
                    <strong>Rocketseat - (2020 - 2020).</strong>
                    <p>
                      O GoStack é um treinamento online, prático e intensivo, no formato de bootcamp. No GoStack vou a 
                      fundo nas tecnologias NodeJS, ReactJS e React Native, e todo ecossistema ao redor dessas ferramentas, 
                      do zero ao deploy. Incluindo testes automatizados, integração contínua, publicação nas stores, e 
                      todas as bibliotecas e frameworks importantes para ficar pronto para os desafios do mundo real e 
                      se destacar no mercado de trabalho. No GoStack os módulos são liberados semanalmente de acordo 
                      com o cronograma da turma, com conceitos e desafios práticos para mostrar que os alunos estão 
                      assimilando o conteúdo. Além disso, ao final do treinamento vou desenvolver uma aplicação completa 
                      para garantir que dominei a stack e recebo uma certificação.
                    </p>
                  </li>
                  <li>
                    <h3>Bacharelado em Sistemas de Informações</h3>
                    <strong>Faculdades Dom Bosco - (2016 - 2019).</strong>
                    <p>
                      Trabalho de conclusão de curso - Sistema Sadios
                      <br />
                      Desenvolvimento de uma plataforma Web para realizar agendamentos de consultas médicas, visando 
                      trazer mobilidade e agilidade no processo. Responsável por criar o layout de todo o sistema, 
                      utilizando técnicas de UX/UI, e responsável pela codificação Front End do projeto utilizando 
                      algumas linguagens como:<br/>
                      HTML: utilizado a Metodologia BEM de marcação.<br/> 
                      CSS: utilizado o Pré Processador SASS. <br/>
                      JavaScript: utilizado JQuery.
                    </p>
                  </li>
                  <li>
                    <h3>Curso Desenvolvedor Front-End</h3>
                    <strong>Danki Code - (2018 - 2019).</strong>
                    <p>
                      O curso de Desenvolvimento Front End aborda os seguintes módulos: entendendo o HTML, 
                      iniciando com CSS, dominando o CSS, Design Responsivo com criação de uma Landing Page, 
                      HTML 5, CSS 3, JavaScript e Lógica de Programação, Introduzindo JQuery, Dominando JQuery, 
                      Criando Templete de E-mail com HTML e CSS, Criando Layout no Photoshop e Conhecendo Font 
                      Aewsome, FlexBox Layout e Frameworks, Bootstrap, Materialize, HTML 5 e CSS 3 Avançado, 
                      Técnicas e Macetes para Desenvolvimento Front End, JavaScript Avançado, Bibliotecas e 
                      Frameworks JS, JQuery Mobile e JQuery UI, Sass / Less, Node JS, UX e UI, 
                      com 10 projetos práticos durante o curso.
                    </p>
                  </li>
                </ul>
              </ExperienceContent>
            </Experience>
          </ContainerWrapper>
        </Center>
      </Container>
    </>
  )
}

export default Training;