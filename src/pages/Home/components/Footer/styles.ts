import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({theme}) => theme.colors["brand-gold-300"]};

  > div {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`

export const Contacts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  p {
    margin-top: 2rem;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    font-size: 0.7rem;
    justify-content: center;
    p {
      width: 50%;
    }
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;

  > div {
    display: flex;
    gap: 2rem;

    svg { 
      color: ${({theme}) => theme.colors["brand-red-700"]};
    }
  }
`

export const NavList = styled.nav`
  width: 80%;
  border-top: 1px solid ${({theme}) => theme.colors["brand-silver-700"]};
  padding-top: 1.5rem;
  
  ul {
    display: flex;
    justify-content: center;
    gap: 3rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    flex-wrap: wrap;
  }

  a {
    color: ${({theme}) => theme.colors["brand-silver-700"]};
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${({theme}) => theme.colors["brand-red-700"]};
    }
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    ul {
      gap:1.5rem;
    }
  }
`

export const FooterCopyright = styled.p`
  font-size: 0.8rem;
  padding-bottom: 0.8rem;

  @media (max-width: ${({theme}) => theme.media.mobile}){
    text-align: center;
    font-size: 0.6rem;
  }
`