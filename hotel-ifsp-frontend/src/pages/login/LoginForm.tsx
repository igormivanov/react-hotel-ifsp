import { ErrorMessage, ForgotPasswordLink, FormButton, InputContainer, LoginErrorMessage, LoginFormContainer } from "./styles";
import {useForm} from 'react-hook-form'
import {AiOutlineLock, AiOutlineMail} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { RegularText } from "../../components/Typography";
import { useState } from 'react';
import { useAuth } from "../../hooks/useAuth";
import { useBooking } from "../../hooks/useBooking";
import { LoginLoader } from "../../components/LoginLoader";

const newLoginFormValidationSchema = z.object({
  email: z.string()
    .email('Formato de email inválido'),
  password: z.string()
    .min(6, 'A senha precisa de no mínimo 6 caracteres'),
})

export type newLoginFormValidationData = z.infer<typeof newLoginFormValidationSchema>

export function LoginForm(){

  const { register, handleSubmit ,formState: {errors} } = useForm<newLoginFormValidationData>({
    resolver: zodResolver(newLoginFormValidationSchema)
  })

  const [failLogin, setFailLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const {signIn} = useAuth();
  const {booking, resetUserBookingList} = useBooking();

  async function handleLogin(data: newLoginFormValidationData){
    setLoading(true);
    setTimeout(async () => { 
      try {
        if(data.email && data.password){
          const isLogged = await signIn(data.email, data.password);
          setLoading(false);
          if(booking.roomType.length > 0){
            return navigate("/booking/confirm")
          }
          if(isLogged){
            resetUserBookingList();
            return navigate("/guest/event")
          } else {
            setFailLogin(true)
          }
        }
      } catch (e) {
        setLoading(false);
        setFailLogin(true);
      }
    }, 2000)
    
  }

  return (
    <LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
      <InputContainer>
        <AiOutlineMail/>
        <input 
          placeholder="Email"
          type="email"
          {...register('email')}
        />
      </InputContainer>
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <InputContainer>
        <AiOutlineLock/>
        <input 
          placeholder="Senha"
          type="password"
          {...register("password")}
        />
      </InputContainer>
      {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      {failLogin && <LoginErrorMessage>Falha no login, email ou senha incorretos.</LoginErrorMessage>}
      <ForgotPasswordLink to="/">Esqueci minha senha</ForgotPasswordLink>
      <FormButton type="submit">
        {loading ? <LoginLoader/> : <>Iniciar Sessão</>}
      </FormButton>
      <RegularText width="auto" size="s">
        Não tem uma conta?
        <Link to="/register">Registre-se</Link>
      </RegularText>
    </LoginFormContainer>
  )
}