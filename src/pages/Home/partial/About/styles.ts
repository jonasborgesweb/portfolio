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

  @media screen and (max-width: 900px){
    flex-wrap: wrap;
  }
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
  box-shadow: 5px 5px 10px rgba(0,0,0,.5);

  @media screen and (max-width: 900px){
    flex: 0 0 80%;
    margin: 0 auto 3rem;
  }

  @media screen and (max-width: 600px){
    flex: 0 0 100%;
    min-height: 288px;
  }

`;

export const Content = styled.div`
  flex: 0 0 54%;

  @media screen and (max-width: 900px){
    flex: 0 0 100%;
    margin: 0 auto;
  }

  h2{
    font-size: 4.2rem;
    font-weight:700;
    color: #d93d86;
    margin-bottom: 2.5rem;

    @media screen and (max-width: 900px){
      text-align: center;
    }

    @media screen and (max-width: 600px){
      text-align: left;
      font-size: 3.2rem;
      margin-bottom: 1rem;
    }

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

    @media screen and (max-width: 900px){
      text-align: center;
    }

    @media screen and (max-width: 600px){
      text-align: left;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;

  @media screen and (max-width: 900px){
    justify-content: center;
  }

  @media screen and (max-width: 600px){
    flex-direction: column;
    align-items: center;
  }

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

    @media screen and (max-width: 600px){
      width: 100%;
    }

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

      @media screen and (max-width: 600px){
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
  }
`;