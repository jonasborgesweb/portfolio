import styled from 'styled-components';
import {shade} from 'polished';

import profile from './../../../../assets/images/profile.png'

export const Center = styled.div`
  max-width: 1280px;
  width: 93%;
  margin: 0 auto;
`;

export const Container = styled.section`
  padding: 7rem 0;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Photo = styled.div`
  flex: 0 0 43%;
  min-height: 400px;
  margin-right: 3.4rem;

  background-image: url(${profile});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 1rem;
  box-shadow: 5px 5px 10px rgba(0,0,0,.5)

`;

export const Content = styled.div`
  flex: 0 0 54%;

  h2{
    font-size: 4.2rem;
    font-weight:700;
    color: #d93d86;
    margin-bottom: 2.5rem;

    span{
      display: block;
    }
  }

  p{
    font-size: 1.8rem;
    line-height: 3rem;
    font-weight: 500;
    color: #3b4259;
    margin-bottom: 3rem;
  }
`;

export const Bottom = styled.div`
  display: flex;

  a{
    text-decoration: none;
    display: block;
    width: 20rem;
    padding: 1.5rem 0;
    border-radius: 5rem;
    transition: .3s ease;
    box-shadow: 0 5px 10px rgba(0,0,0,.3);
    
    font-size: 1.8rem;
    font-weight: 700;
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

    &:not(:last-child){
      margin-right: 3rem;
    }
  }
`;