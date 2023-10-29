import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({theme}) => theme.colors["brand-white"]};
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 3;
  box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.10);

  > div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    @media (max-width: 1150px){
      gap: 2rem;
    }

    @media (max-width: ${({theme}) => theme.media.tablet}){
      justify-content: space-around;
      gap: 5rem;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}){
      gap: 0rem;
    }
  }

  @media (max-width: ${({theme}) => theme.media.tablet}){
    position: relative;
  }
`

export const HeaderButtonsContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 3rem;
    text-transform: uppercase;
    font-size: 0.75rem;

    a {
      color: ${({theme}) => theme.colors["brand-red-700"]};

      &:hover {
        color: ${({theme}) => theme.colors["brand-gold-300"]};
      }
    }

    @media (max-width: 1150px){
      gap: 1.5rem;
    }

    @media (max-width: ${({theme}) => theme.media.tablet}){
      display: none;
      justify-content: space-between;
    }
`

export const BookButton = styled.button`
  text-transform: uppercase;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 8.75rem;
  height: 2.75rem;
  /* padding: 0.75rem 2.5rem; */
  background-color: ${({theme}) => theme.colors["brand-silver-400"]};
  border: 1px solid ${({theme}) => theme.colors["brand-gold-400"]};
  color: ${({theme}) => theme.colors["brand-red-700"]};
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({theme}) => theme.colors["brand-gold-300"]};
  }
`

export const NavMenuToggle = styled.button`
  display: none;
  border: 0;
  background-color: transparent;
  color: ${({theme}) => theme.colors["brand-red-700"]};

  @media (max-width: ${({theme}) => theme.media.tablet}){
    display: block;
    cursor: pointer;
  }
`