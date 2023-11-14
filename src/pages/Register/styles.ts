import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterPageContainer = styled.div`
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    position: relative;
    gap: 0.5rem;
    padding: 0 2rem;
    overflow: hidden;

  @media(max-width: ${({theme}) => theme.media.mobile}){
    p {
      font-size: 0.8rem;
    }
  }
`

export const RegisterFormContainer = styled.form`
  width: 25rem;
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  padding: 1rem 1.5rem;
  background: ${({theme}) => theme.colors["brand-white"]};
  border-radius: 4px;
  box-shadow: 0 0 6px 1px rgba(150,150,150,.4);
  margin-top: 1rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  p {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1.5rem;

    a {
      text-decoration: underline;
      color: ${({theme}) => theme.colors["brand-red-500"]};
    }
  }

  @media(max-width: ${({theme}) => theme.media.mobile}){
    width: 22rem;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors["brand-silver-200"]};
  border: 0.4rem;
  padding: 0.5rem;
  gap: 0.8rem;
  border-radius: 8px;
  margin-top: 1rem;

  input {
    height: 30px;
    width: 100%;
    background: transparent;
    border: none;
    font-size: 0.9rem;
  
    &:-webkit-autofill,
    &:-webkit-autofill:focus {
    transition: background-color 0s 600000s, color 0s 600000s;
    }
  }


  svg {
    color: ${({theme}) => theme.colors["brand-silver-700"]};
  }
`

export const ForgotPasswordLink = styled(Link)`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  text-decoration: underline;
  color: ${({theme}) => theme.colors["brand-red-500"]};
`

export const FormButton = styled.button`
  margin-top: 1.5rem;
  border: none;
  padding: 0.7rem;
  font-size: 1rem;
  background: ${({theme}) => theme.colors["brand-gold-300"]};
  color:  ${({theme}) => theme.colors["brand-red-700"]};
  border-radius: 4px;
  cursor: pointer;
`

export const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: ${({theme}) => theme.colors["brand-red-400"]}; 
`
