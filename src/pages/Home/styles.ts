import styled from "styled-components";

export const HomeContainer = styled.main`

  padding-top: 5rem;

  @media (max-width: ${({theme}) => theme.media.tablet}){
    padding: 0;
  }
`

export const ButtonBaseStyle = styled.button`
  cursor: pointer;
  border-radius: 0.25rem;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
`









