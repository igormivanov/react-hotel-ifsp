import styled, { css } from "styled-components";

export const SearchBookingInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 200px;

  div {
    border: 2px solid ${({theme}) => theme.colors["brand-gold-300"]};
    padding: 0.3rem 0.5rem;
    display: flex;
    justify-content: flex-end;
    border-radius: 4px;
    align-items: center;
    height: 2.3rem;

    p{
      margin-right: 0.5rem;
    }
  }

  @media(max-width: ${({theme}) => theme.media.tablet}){
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.colors["brand-gold-300"]};
    flex-direction: row;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      border: none;
    }

    p {
      display: none;
    }
  }
`
interface InputMobileButtonProps {
  $error?: boolean;
}

export const InputMobileButton = styled.button<InputMobileButtonProps>`
  width: 1.4rem;
  height: 1.4rem;
  border: none;
  font-size: 1.3rem;
  font-weight: 400;
  border-radius: 4px;
  background: ${({theme}) => theme.colors["brand-gold-300"]};
  color: ${({theme}) => theme.colors["brand-red-500"]};
  cursor: pointer;

  ${({$error}) => $error && css`
    background:  #E2D9C3;
    cursor: auto;
  `}

  @media(max-width: ${({theme}) => theme.media.tablet}){
    display: inline-block;
    width: 2rem;
    height: 2rem;
  }
`