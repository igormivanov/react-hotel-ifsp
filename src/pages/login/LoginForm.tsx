import { ErrorMessage, ForgotPasswordLink, FormButton, InputContainer, LoginFormContainer } from "./styles";
import {useForm} from 'react-hook-form'
import {AiOutlineLock, AiOutlineMail} from 'react-icons/ai'
import { Link } from "react-router-dom";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { RegularText } from "../../components/Typography";

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

  function handleLogin(data: newLoginFormValidationData){
    return console.log(data);
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
      <ForgotPasswordLink to="/">Esqueci minha senha</ForgotPasswordLink>
      <FormButton type="submit">Iniciar Sessão</FormButton>
      <RegularText width="auto" size="s">
        Não tem uma conta?
        <Link to="/register">Registre-se</Link>
      </RegularText>
    </LoginFormContainer>
  )
}