import styled from "styled-components";

export const PrivateHeaderContainer = styled.header`
  background: ${({theme}) => theme.colors["brand-red-500"]};
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.10);

  > div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.8rem;
  }
`

export const HeaderNav = styled.nav`

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li {
    color: ${({theme}) => theme.colors["brand-silver-400"]};

    
  }

  a {
    font-size: 0.95rem;
    color: ${({theme}) => theme.colors["brand-silver-400"]};
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${({theme}) => theme.colors["brand-silver-400"]};
    }

    &.active {
      color: ${({theme}) => theme.colors["brand-white"]};
    }
  }

  div {

    display: flex;
    gap: 0.5rem;
    cursor: pointer;

    button {
      font-size: 0.9rem;
      background: transparent;
      border: none;
      color: ${({theme}) => theme.colors["brand-silver-400"]};
      cursor: pointer;
    }

    svg {
      color: ${({theme}) => theme.colors["brand-white"]};
    }
  }

  @media(max-width: ${({theme}) => theme.media.tablet}){
    display: none;
  }
`

export const NameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme}) => theme.colors["brand-silver-200"]};
`

export const MobileHeaderNav = styled.nav`
  display: none;
  gap: 1.5rem;

  svg {
    color: ${({theme}) => theme.colors["brand-white"]};
    cursor: pointer;
  }

  @media(max-width: ${({theme}) => theme.media.tablet}){
    display: flex;
  }
`