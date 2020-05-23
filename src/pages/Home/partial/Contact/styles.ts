import styled from 'styled-components';
import {shade} from 'polished';

export const Center = styled.div`
  max-width: 1280px;
  width: 93%;
  margin: 0 auto;
`;

export const Container = styled.section`
  padding: 7rem 0;
`;

export const ContainerTop = styled.div`
  margin-bottom: 4.5rem;
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;

  @media screen and (max-width: 900px){
    width: 60%;
    margin: 0 auto;
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 600px){
    width: 100%;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 5px 5px 10px rgba(0,0,0,.5);
  padding: 4rem 3.5rem;
  transition: .3s ease;

  @media screen and (max-width: 600px){
    padding: 4rem 1rem;
  }

  &:hover{
    transform: translateY(-1rem);

    @media screen and (max-width: 600px){
      transform: translateY(0);
    }
  }
`;
export const CardIcone = styled.div`

  img{
    width: 50px;
    margin: 0 auto 2rem;
    display: block;
  }
`;
export const CardContent = styled.div`

  h3{
    font-size: 2.4rem;
    font-weight: 600;
    color: #d93d86;
    text-align: center;
    margin-bottom: 1rem;
  }

  p{
    font-size: 1.8rem;
    font-weight: 500;
    color: #3b4259;
    text-align: center;
    margin-bottom: 1.6rem;

    @media screen and (max-width: 600px){
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  a{
    margin: 2rem auto 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    padding: 1.5rem 0;
    border-radius: 5rem;
    transition: .3s ease;
        
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;

    background-color: #3b4259;
    color: #fff;

    &:hover{
      background-color: ${shade(0.1, '#3B4259')};
      

      @media screen and (max-width: 600px){
        background-color: #3b4259;
        color: #fff;
      }
    }

    img{
      width: 20px;
      margin-right: .5rem;
    }
  }
`;