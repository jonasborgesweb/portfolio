import styled from 'styled-components';

export const Center = styled.div`
  max-width: 1280px;
  width: 93%;
  margin: 0 auto;
`;

export const Container = styled.footer`
  padding: 2rem 0;
  background-color: #3b4259;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`;

export const Logomarca = styled.div`
  width: 17.6rem;

  @media screen and (max-width: 600px){
    margin-bottom: 2rem;
  }

  img{
    width: 100%;
  }
`;
export const Copyright = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px){
    align-items: flex-start;
    width: 70%
  }

  svg{
    color: #fff;
    margin-right: .5rem;
  }

  p{
    font-size: 1.6rem;
    font-weight: 400;
    color: #fff;

    @media screen and (max-width: 600px){
      margin-top: .3rem;
      text-align: center;
    }
  }
`;