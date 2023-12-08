import styled, { css } from "styled-components";

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
  gap: 2rem;

  a {
    display: flex;
    align-items: center;
  }
`

export const CountryLang = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media(max-width: ${({theme}) => theme.media.mobile}){
    display: none;
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

export const UserDropdown = styled.div`
  font-weight: 400;
  font-size: 0.9rem;
  display: inline-block;
  padding: 0 1rem;
  margin-right: 2rem;

  div:nth-child(1){
    cursor: pointer;
  }

  svg {
    color: ${({theme}) => theme.colors["brand-silver-700"]};
  }

  svg:nth-child(1) {
    margin-right: 0.5rem;
  }

  svg:nth-child(2) {
    margin-left: 0.5rem;
  }
`

interface DropdownCardProps {
  open: boolean;
}

export const DropdownCard = styled.div<DropdownCardProps>`
  margin-top: 1rem;
  width: auto;
  position: absolute;
  height: auto;
  background: ${({theme}) => theme.colors["brand-white"]};
  box-shadow: 0 3px 15px #00000029;
  z-index: 9999;
  border-radius: 4px;
  margin-right: 1rem;

  ${({open}) => open === false && css`
    display: none;
  `}

  li:nth-child(1){
    margin-top: 0.8rem;
  }

  li {
    display: flex;
    padding: 0.75rem;
    font-size: 0.9rem;
    font-weight: 300;
    justify-content: flex-start;
    align-items: center;
    transition: 0.1s ease-in-out;
  
    &:hover{
      background: rgba(0, 0, 0, 0.04);;
    }
  }

  a {
    color: ${({theme}) => theme.colors["brand-red-700"]};
  }

  button {
    color: ${({theme}) => theme.colors["brand-red-700"]};
    font-size: 0.9rem;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: start;
  }
`