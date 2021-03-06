import styled from 'styled-components';
import {shade} from 'polished'

export const Center = styled.div`
  max-width: 1280px;
  width: 93%;
  margin: 0 auto;
`;

export const Container = styled.section`
  padding: 7rem 0;
`;

export const ContainerTop = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto 4.5rem;

  @media screen and (max-width: 600px){
    margin: 0 auto 2.5rem;
  }

  h2{
    font-size: 4.2rem;
    font-weight:700;
    color: #d93d86;
    margin-bottom: 2.5rem;
    text-align: center;

    @media screen and (max-width: 600px){
      text-align: left;
      font-size: 3.2rem;
      margin-bottom: 1rem;
    }
  }

  p{
    font-size: 1.8rem;
    font-weight: 500;
    color: #3b4259;
    text-align: center;

    @media screen and (max-width: 600px){
      text-align: left;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`;

export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 2.5rem;

  @media screen and (max-width: 900px){
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (max-width: 600px){
    grid-template-columns: repeat(1,1fr);
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 5px 5px 10px rgba(0,0,0,.5);
  transition: .3s ease;

  &:hover{
    transform: translateY(-1rem);

    @media screen and (max-width: 900px){
      transform: translateY(0);
    }
  }
`;

export const CardTop = styled.div`
    position: relative;

    &:hover{

      > div{
        opacity: 1;
      }
    }

    div{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(217, 61, 134, .9);
      opacity: 0;
      transition: .3s ease;
      -webkit-border-top-left-radius: 10px;
      -webkit-border-top-right-radius: 10px;
      -moz-border-radius-topleft: 10px;
      -moz-border-radius-topright: 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;

      h2{
        font-size: 2.4rem;
        font-weight: 600;
        color: #fff;
        margin-bottom: .5rem;
      }

      h3{
        font-size: 1.8rem;
        font-weight: 400;
        color: #fff;
        margin-bottom: 2rem;
      }

      button{
        display: block;
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
      }
    }

    img{
      width: 100%;
      display:block;
      -webkit-border-top-left-radius: 10px;
      -webkit-border-top-right-radius: 10px;
      -moz-border-radius-topleft: 10px;
      -moz-border-radius-topright: 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
`;
export const CardContent = styled.div`
  padding: 2rem 1.5rem;

  h2{
    font-size: 2.4rem;
    font-weight: 500;
    color: #d93d86;
    text-align: center;
    margin-bottom: .5rem;
  }
  h3{
    font-size: 1.8rem;
    font-weight: 500;
    color: #3b4259;
    text-align: center;
    margin-bottom: 1rem;
  }
  p{
    font-size: 1.4rem;
    font-weight: 500;
    color: #3b4259;
    text-align: center;
  }
`;