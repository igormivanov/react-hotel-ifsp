import styled from "styled-components";

export const GastronomyContainer = styled.section`
  width: 100%; 
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 6rem;

  img {
    height: 479px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p:nth-child(4){
    margin-top: 2rem;
  }

  p {
    width: 650px;    
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    h1 {
      font-size: 2rem;
    }

    img {
      height: 250px;
    }

    p:nth-child(3),
    p:nth-child(4),
    p:nth-child(5){
    width: 65%;
  }
  }
`

export const GastronomyList = styled.div`
  background-color: ${({theme}) => theme.colors["brand-gold-400"]};
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 0;
    gap: 4rem;
  }

  li {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors["brand-white"]};

    &:hover {
      color: ${({theme}) => theme.colors["brand-gold-200"]};
    }
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    ul {
      flex-wrap: wrap;
      gap: 1.2rem;
    }

    li {
      font-size: 0.8rem;
    }
  }
`