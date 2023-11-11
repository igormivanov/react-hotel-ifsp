import styled from "styled-components";

export const HeaderContainer = styled.header`

  background: ${({theme}) => theme.colors["brand-white"]};
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

export const BookingNav = styled.nav`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  a {
    display: flex;
    align-items: center;
  }

  @media(max-width: ${({theme}) => theme.media.mobile}){
    div {
      display: none;
    }
  }
`

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  gap: 0.3rem;
  color: ${({theme}) => theme.colors["brand-red-700"]};
  cursor: pointer;
`