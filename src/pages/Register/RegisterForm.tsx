import { useForm } from "react-hook-form";
import { ErrorMessage, ForgotPasswordLink, FormButton, InputContainer, RegisterFormContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineCreditCard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RegularText } from "../../components/Typography";

const createUserFormValidationSchema = z.object({
  fullName: z.string().transform(name => {
    return name.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  email: z.string().email('Email inválido').toLowerCase(),
  password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres'),
  cpf: z.string(),
})

export type createUserFormValidationData = z.infer<typeof createUserFormValidationSchema>

export function RegisterForm(){

  const { register, handleSubmit, reset ,formState: {errors} } = useForm<createUserFormValidationData>({
    resolver: zodResolver(createUserFormValidationSchema)
  })


  function handleCreateNewUser(data: createUserFormValidationData){
    console.log(data)
    reset();
  }

  return (
    <RegisterFormContainer onSubmit={handleSubmit(handleCreateNewUser)}>
      <div>
        <InputContainer>
          <AiOutlineUser/>
          <input
            placeholder="Nome completo"
            type="text"
            {...register('fullName')}
          />
        </InputContainer>
        {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
        <InputContainer>
          <AiOutlineMail/>
          <input
            placeholder="Email"
            type="email"
            {...register("email")}
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
        <InputContainer>
          <AiOutlineCreditCard/>
          <input
            placeholder="Cpf"
            type="text"
            {...register("cpf")}
          />
        </InputContainer>
        {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
      </div>
      <ForgotPasswordLink to="/">Esqueci minha senha</ForgotPasswordLink>
      <FormButton type="submit">Iniciar Sessão</FormButton>
      <RegularText width="auto" size="s">
        Já possui um cadastro?
        <Link to="/login">Faça login</Link>
      </RegularText>
    </RegisterFormContainer>
  )
}