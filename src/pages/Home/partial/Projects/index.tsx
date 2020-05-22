import React,{useState} from 'react';
import {AiOutlineGlobal,AiOutlineGithub} from 'react-icons/ai';

import {
  Container,
  Center,
  ContainerTop,
  ContainerWrapper,
  Card,
  CardContent,
  CardTop
} from './styles';

import {
  ModalTop,
  ModalBottom,
  ModalMiddle
} from '../../../../components/Modal/styles'

import dataProjects from '../../../../components/Resources/projects';
import Modal from './../../../../components/Modal'

interface dataProjects{
  category:string;  
  title: string;
  description: string;
  techs:string;
  urlImage:string;
  urlRepository:string;
  url:string;
}

const Projects:React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<dataProjects>();

  const loadingModalData = (project: any) =>{
    setModalData(project);
  }
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
            {
              dataProjects.map(project => 
                <Card key={project.title}>
                  <CardTop>
                      <div>
                        <h2>{project.category}</h2>
                        <h3>{project.title}</h3>
                        <button type="button"  onClick={()=>{setIsModalVisible(true); loadingModalData(project)}}>Ver detalhes</button>
                      </div>
                      <img src={project.urlImage} alt="Imagem"/>
                  </CardTop>
                  <CardContent>
                    <h2>{project.title}</h2>
                    <h3>{project.techs}</h3>
                    <p>{project.category}</p>
                  </CardContent>
                </Card>  
              )
            }  
          </ContainerWrapper>
        </Center>
        {isModalVisible && 
        <Modal id="modal" onClose={()=>setIsModalVisible(false)}>
          <ModalTop>
            <h2>{modalData?.title}</h2>
            <p>{modalData?.category}</p>
          </ModalTop>
          <ModalMiddle>
          <img src={modalData?.urlImage} alt={modalData?.title}/>
            <p>{modalData?.description}</p>
            <div>
              <p><strong>Tecnologias</strong>: {modalData?.techs}</p>
            </div>
          </ModalMiddle>
          <ModalBottom>
            <a href={modalData?.url} target="blank">
              <AiOutlineGlobal size={20}/>
              Site
            </a>
            <a href={modalData?.urlRepository} target="blank">
              <AiOutlineGithub size={20}/>
              GitHub
            </a>
          </ModalBottom>
        </Modal>}
      </Container>
    </>
  )
}

export default Projects;