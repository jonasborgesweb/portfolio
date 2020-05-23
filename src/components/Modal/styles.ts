import styled from 'styled-components';
import {shade} from 'polished';

export const Center = styled.div``;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
export const ContainerContent = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 102%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem;

    overflow-y: auto;
    overflow-x: hidden;

    z-index: 1000;
`;

export const Content = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  width: 60%;
  margin-bottom: 2%;
  padding: 2rem 2rem 6rem;
  border-radius: 1rem;

  @media screen and (max-width: 768px){
    width: 90%;
  }

  header{
    display: flex;
    justify-content: flex-end;

    button{
      display: flex;
      justify-content: center;
      align-items: center;

      margin-top: -15px;
      margin-right: -15px;
      border: none;
      background-color: transparent;
      border-radius: 50%;
      padding: .5rem;

      &:hover{
        svg{
          color: ${shade(0.1, '#D93D86')};
        }
      }

      svg{
        transition: .3s ease;
        color: #D93D86;
      }
    }
  }
`;

export const ModalTop = styled.div`
  margin-bottom: 2rem;

  h2{
    font-size: 4.2rem;
    font-weight:700;
    color: #d93d86;
    margin-bottom: .5rem;
    text-align: center;
  }

  p{
    font-size: 1.4rem;
    font-weight: 500;
    color: #3b4259;
    text-align: center;
  }

`;

export const ModalMiddle = styled.div`
  margin-bottom: 4rem;  

  img{
    width: 100%;
    margin-bottom: 2rem;
  }

  p{
    font-size: 1.8rem;
    font-weight: 500;
    color: #3b4259;
    text-align: center;

    @media screen and (max-width: 768px){
      text-align: left;
    }
  }

  div{
    margin-top: 2rem;
  }


`;


export const ModalBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px){
    flex-direction: column;
    align-items: flex-start;
  }

  a{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    width: 20rem;
    border: none;
    padding: 1.5rem 0;
    border-radius: 5rem;
    transition: .3s ease;
    box-shadow: 0 5px 10px rgba(0,0,0,.3);
    
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;

    background-color: #a1d979;
    color: #fff;

    &:hover{
      background-color: ${shade(0.1, '#a1d979')}
    }

    &:last-child{
      background-color: #3B4259;

      &:hover{
        background-color: ${shade(0.1, '#3B4259')}
      }
    }

    /* @media screen and (max-width: 600px){
      width: 100%;
    } */

    &:not(:last-child){
      margin-right: 2.5rem;

      @media screen and (max-width: 600px){
        margin-right: 0;
        margin-bottom: 1.6rem;
      }
    }

    svg{
      margin-right: 5px;
    }
  }
`;