import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0);
  }
`;

export const Center = styled.div`
  max-width: 1280px;
  width: 93%;
  margin: 0 auto;
`;

export const Container = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background-color: #3B4259;
  padding: 1rem 0;
  box-shadow: 0 5px 10px rgba(0,0,0,.5);
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logomarca = styled.div`
  width: 7.6rem;

  img{
    width: 100%
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: .5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    color: #fff;
  }
`;


export const Navigation = styled.nav`
  position: absolute;
  top: 7.2rem;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #D93D86;
  animation: ${fadeIn} .5s ease;
  z-index: 9999;

  ul{
    list-style: none;

    padding-top: 1rem;

    li{

      &:not(:last-child){
        margin-bottom: 1rem;

        a{
          border-bottom: 1px solid #fff;
        }
      }

      a{
        display: block;
        width: 100%;
        text-decoration: none;
        transition: .3s ease;

        font-size: 1.8rem;
        font-weight: 600;
        text-align: center;
        color: #fff;

        padding: 1.6rem 0;

        &:hover{
          color: #A1D979;
        }

      }
    }
  }

`;