import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../../components/Typography";
import { RegisterPageContainer } from "./styles";
import { RegisterForm } from "./RegisterForm";

export function RegisterPage(){

  const { colors } = useTheme()

  return (
    <RegisterPageContainer>
      <TitleText size="m">Novo Hóspede</TitleText>
      <RegularText width="auto" weight={500} size="m" color={colors["brand-red-700"]}>
        Tenha acesso aos detalhes da sua reserva e muito mais!
      </RegularText>
      <RegisterForm/>
    </RegisterPageContainer>
  )
}