import styled from 'styled-components';

export const Center = styled.div`
  max-width: 1280px;
  width: 93%;
  margin: 0 auto;
`;

export const Container = styled.header`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
  z-index: 99999;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logomarca = styled.div`
  width: 9.6rem;

  @media screen and (max-width: 600px){
    width: 7.6rem;
  }

  img{
    width: 100%
  }
`;


export const Navigation = styled.nav`

  @media screen and (max-width: 900px){
    display: none;
  }

  ul{
    display: flex;
    align-items: center;

    list-style: none;

    li{

      &:not(:last-child){
        margin-right: 2.5rem;
      }

      a{
        display: block;
        text-decoration: none;
        transition: .3s ease;

        font-size: 1.8rem;
        font-weight: 600;
        color: #A1d979;

        &:hover{
          color: #fff;
        }

      }
    }
  }

`;