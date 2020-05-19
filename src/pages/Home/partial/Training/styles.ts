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
  grid-template-columns: repeat(2,1fr);
  grid-gap: 2.5rem;

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(1,1fr);
    margin-left: 15px;
  }
`;

export const Experience = styled.div``;
export const ExperienceTop = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  padding-bottom: 3rem;
  padding-left: 3rem;
  border-left: 1px solid #ccc;

  @media screen and (max-width: 768px){
    padding-left: 2.9rem;
  }


  div{
    position: absolute;
    left: -2.5rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color:#d93d86;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:768px){
      width: 4.5rem;
      height: 4.5rem;
    }


    svg{
      color: #fff;
    }
  }

  h2{
      font-size: 2.4rem;
      font-weight: 600;
      color: #3B4259;

      @media screen and (max-width:768px){
        font-size: 2rem;
      }
    }
`;
export const ExperienceContent = styled.div`

  ul{
    list-style: none;

    li{
      position: relative;
      border-left: 1px solid #ccc;
      padding-left: 3rem;
      padding-bottom: 2.5rem;

      @media screen and (max-width: 768px){
        padding-left: 2rem;
      }

      &:before{
        content: '';
        position: absolute;
        top: 6px;
        left: -4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color:#d93d86;
      }

      h3{
        font-size: 1.6rem;
        font-weight: 600;
        color: #3b4259;
        margin-bottom: .6rem;
      }

      strong{
        display: block;
        font-size: 1.3rem;
        font-weight: 500;
        color: #d93d86;
        margin-bottom: .8rem;
      }

      p{
        font-size: 1.4rem;
        font-weight: 500;
        color: #3b4259;
        line-height: 2.2rem;
      }
    }
  }

`;