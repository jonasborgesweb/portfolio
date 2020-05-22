import styled from 'styled-components';

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