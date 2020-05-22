import React from 'react';
import {TiTimesOutline} from 'react-icons/ti'

import {Container,ContainerContent,Content} from './styles';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement>{
  id: string;
  onClose: any;
}

const Modal:React.FC<ModalProps> = ({id='modal', onClose = ()=>{}, children}) => {
  const handleOutsideClick= (e:any) =>{
    if(e.target.id === id){
      onClose();
    }
  }
  return(
    <Container>
      <ContainerContent id={id} onClick={handleOutsideClick}>
        <Content>
          <header>
            <button type="button" onClick={onClose}>
              <TiTimesOutline size={30} />
            </button>
          </header>
          {children}
        </Content>
      </ContainerContent>
    </Container>
  )
}

export default Modal;