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
`;

export const Logomarca = styled.div`
  width: 17.6rem;

  img{
    width: 100%;
  }
`;
export const Copyright = styled.div`
  display: flex;
  align-items: center;

  svg{
    color: #fff;
    margin-right: .5rem;
  }

  p{
    font-size: 1.6rem;
    font-weight: 400;
    color: #fff;
  }
`;