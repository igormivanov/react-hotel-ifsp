import { Line } from "../../../../components/Line";
import { RegularText, TitleText } from "../../../../components/Typography";
import { GastronomyContainer, GastronomyList } from "./styles";

export function Gastronomy(){
  return(
    <GastronomyContainer id="gastronomy">
        <div className='container'>
          <TitleText size="xl">Gastronomia</TitleText>
          <Line/>
          <RegularText>As sugestões de nosso cardápio são preparadas por profissionais especializados e com acompanhamento nutricional. Com uma seleção de saborosos pratos contemporâneos atende toda a família.</RegularText>
          <RegularText size="m" weight="bold">Possuímos Cozinha Inclusiva, livre de contaminação do glúten, para preparar as opções de café da manhã e refeições para celíacos e intolerantes.</RegularText>
          <RegularText>Ao fazer sua reserva, indique sua condição para conhecermos suas preferências.</RegularText>
        </div>
        <GastronomyList>
          <ul>
            <li>Café da manhã</li>
            <li>Bistrô</li>
            <li>Bar piscina</li>
            <li>Tourine Bar</li>
            <li>Room Service</li>
          </ul>
        </GastronomyList>
        <img src="https://static.wixstatic.com/media/758a8f_d4fefdf432cc449b93122461b6a85d12~mv2_d_1971_1267_s_2.jpg/v1/fill/w_1513,h_479,al_c,q_90,enc_auto/758a8f_d4fefdf432cc449b93122461b6a85d12~mv2_d_1971_1267_s_2.jpg" alt="" />
    </GastronomyContainer>
  )
}