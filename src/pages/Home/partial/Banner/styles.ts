import styled, { keyframes } from 'styled-components';
import {shade} from 'polished'

import backcground from './../../../../assets/images/background.png';

const upDown = keyframes `
    0% {
      bottom: 3rem;
    }

    50%{
      bottom: 5rem;
    }

    100% {
      bottom: 3rem;
    }
`

export const Center = styled.div`
  max-width: 1280px;
  width: 93%;
  margin: 0 auto;
`;

export const Container = styled.section`

  background-image: url(${backcground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  height: 60rem;

  position: relative;

  -webkit-clip-path: polygon(0 0, 100% 0, 100% 55rem, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 55rem, 0 100%);

  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(56,66,89,.7);
  }

  svg{
    position: absolute;
    left: 50%;
    bottom: 3rem;
    transform: translate(-50%,-50%);
    color: #d93d86;

    animation: ${upDown} 1s  linear infinite;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-size: 3.6rem;
    font-weight: 600;
    text-align: center;
    color: #a1d979;
    margin-bottom: 2rem;
  }

  h1{
    font-size: 4.2rem;
    font-weight: 600;
    text-align: center;
    color: #fff;
    margin-bottom: 4rem;
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

    &:hover{
      background-color: ${shade(0.1, '#a1d979')}
    }
  }

`;