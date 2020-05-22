import React from 'react';

import {
  Card,
  CardTop,
  CardContent,
} from './styles';

import imgProject from './../../assets/images/projects/default.jpg';

const Project:React.FC = () => {
  return(
    <>
      <Card>
        <CardTop>
            <div>
              <h2>Categoria</h2>
              <h3>Nome do Projeto</h3>
              <button type="button">Ver detalhes</button>
            </div>
            <img src={imgProject} alt="Imagem"/>
        </CardTop>
        <CardContent>
          <h2>Nome do Projeto</h2>
          <h3>Techs, Techs, Techs</h3>
          <p>Categoria</p>
        </CardContent>
      </Card>
      <Card>
        <CardTop>
            <div>
              <h2>Categoria</h2>
              <h3>Nome do Projeto</h3>
              <button type="button">Ver detalhes</button>
            </div>
            <img src={imgProject} alt="Imagem"/>
        </CardTop>
        <CardContent>
          <h2>Nome do Projeto</h2>
          <h3>Techs, Techs, Techs</h3>
          <p>Categoria</p>
        </CardContent>
      </Card>
      <Card>
        <CardTop>
            <div>
              <h2>Categoria</h2>
              <h3>Nome do Projeto</h3>
              <button type="button">Ver detalhes</button>
            </div>
            <img src={imgProject} alt="Imagem"/>
        </CardTop>
        <CardContent>
          <h2>Nome do Projeto</h2>
          <h3>Techs, Techs, Techs</h3>
          <p>Categoria</p>
        </CardContent>
      </Card>
      <Card>
        <CardTop>
            <div>
              <h2>Categoria</h2>
              <h3>Nome do Projeto</h3>
              <button type="button">Ver detalhes</button>
            </div>
            <img src={imgProject} alt="Imagem"/>
        </CardTop>
        <CardContent>
          <h2>Nome do Projeto</h2>
          <h3>Techs, Techs, Techs</h3>
          <p>Categoria</p>
        </CardContent>
      </Card>
      <Card>
        <CardTop>
            <div>
              <h2>Categoria</h2>
              <h3>Nome do Projeto</h3>
              <button type="button">Ver detalhes</button>
            </div>
            <img src={imgProject} alt="Imagem"/>
        </CardTop>
        <CardContent>
          <h2>Nome do Projeto</h2>
          <h3>Techs, Techs, Techs</h3>
          <p>Categoria</p>
        </CardContent>
      </Card>
      <Card>
        <CardTop>
            <div>
              <h2>Categoria</h2>
              <h3>Nome do Projeto</h3>
              <button type="button">Ver detalhes</button>
            </div>
            <img src={imgProject} alt="Imagem"/>
        </CardTop>
        <CardContent>
          <h2>Nome do Projeto</h2>
          <h3>Techs, Techs, Techs</h3>
          <p>Categoria</p>
        </CardContent>
      </Card>
    </>
  )
}

export default Project;