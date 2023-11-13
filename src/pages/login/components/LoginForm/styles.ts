import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginFormContainer = styled.form`
  width: 22rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background: ${({theme}) => theme.colors["brand-white"]};
  border-radius: 4px;
  /* gap: 1.2rem; */
  box-shadow: 0 0 6px 1px rgba(150,150,150,.4);
  margin-top: 1rem;

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
`

export const InputContainer =styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors["brand-silver-200"]};
  border: 0.4rem;
  padding: 0.5rem;
  gap: 0.8rem;
  border-radius: 8px;
  /* height: 80px; */
  /* width: 480px; */
  margin-top: 1rem;

  input {
    &-internal-autofill-selected{
      background-color: transparent;
    }
    height: 30px;
    width: 100%;
    background: transparent;
    border: none;
    font-size: 0.9rem;
    
  }

  svg {
    color: ${({theme}) => theme.colors["brand-silver-700"]};
  }
`

export const ForgotPasswordLink = styled(Link)`
  margin-top: 2.5rem;
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
`

export const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: ${({theme}) => theme.colors["brand-red-400"]}; 
`