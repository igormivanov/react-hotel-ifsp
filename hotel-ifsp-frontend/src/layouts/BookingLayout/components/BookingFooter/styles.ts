import styled from "styled-components";

export const BookingFooterContainer = styled.div`
  background: ${({theme}) => theme.colors["brand-silver-700"]};
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  gap: 5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  svg {
    color: ${({theme}) => theme.colors["brand-white"]};
  }

  @media(max-width: ${({theme}) => theme.media.tablet}){
    display: none;
  }
`