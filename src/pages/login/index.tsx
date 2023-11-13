import { Content, LoginContainer } from "./styles";
import { LoginHeader } from "./components/Header";
import { RegularText, TitleText } from "../../components/Typography";
import { useTheme } from "styled-components";
import { LoginForm } from "./components/LoginForm";

export function LoginPage(){

  const { colors } = useTheme()

  return (
    <LoginContainer>
      <LoginHeader/>
      <Content>
        <TitleText size="m">Login</TitleText>
        <RegularText width="auto" weight={500} size="m" color={colors["brand-red-700"]}>
          Faça login e tenha acesso aos detalhes da sua reserva e muito mais!
        </RegularText>
        <LoginForm/>
      </Content>
    </LoginContainer> 
  )
}