import styled from "styled-components";
import { ButtonBaseStyle } from "../../styles";
import { Link } from "react-router-dom";

export const DetailsContainer = styled.section`
  padding: 6rem 0;

> div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    > div {

      h1 {
        font-size: ${({theme}) => theme.textSizes["title-title-l"]};
      }

      p:nth-child(3) {
        width: 65%;
      }

      p:nth-child(4) {
        display: none;
      }  
    }
  }
`
export const DetailsButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`

export const DetailsButton = styled(ButtonBaseStyle)`
  width: 150px;
  padding: 0.75rem 0;
  border: 1px solid ${({theme}) => theme.colors["brand-silver-600"]};
  color: ${({theme}) => theme.colors["brand-silver-700"]};
  margin-top: 3rem;

  &:hover {
    border: 1px solid ${({theme}) => theme.colors["brand-gold-400"]};
    color: ${({theme}) => theme.colors["brand-red-500"]};
  }
`

export const DetailsLink = styled(Link)`
  width: 150px;
  padding: 0.75rem 0;
  border: 1px solid ${({theme}) => theme.colors["brand-silver-600"]};
  color: ${({theme}) => theme.colors["brand-silver-700"]};
  margin-top: 3rem;
  cursor: pointer;
  border-radius: 0.25rem;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  font-size: 0.8rem;
  text-align: center;
  background: ${({theme}) => theme.colors["brand-silver-200"]};
  a {
    color: ${({theme}) => theme.colors["brand-silver-700"]};
  }

  &:hover {
    border: 1px solid ${({theme}) => theme.colors["brand-gold-400"]};
    color: ${({theme}) => theme.colors["brand-red-500"]};
  }
`