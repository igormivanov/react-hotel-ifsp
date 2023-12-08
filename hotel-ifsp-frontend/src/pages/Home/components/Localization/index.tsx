import { Line } from "../../../../components/Line";
import { RegularText, TitleText } from "../../../../components/Typography";
import { LocalizationContainer, LocalizationMap } from "./styles";

export function Localization(){
  return (
    <LocalizationContainer id="localization">
      <div className='container'>
          <TitleText size="xl">Localização</TitleText>
          <Line/>
          <RegularText>O Hotel IFSP está localizado em um bairro charmoso e tranquilo a 2km do centro da cidade, na Avenida dos Três Poderes, número 375, num ponto estratégico, com dois fáceis acessos às principais avenidas centrais de Salto.</RegularText>
          <LocalizationMap>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14670.22097321444!2d-47.3026404!3d-23.1864273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf53972da3336f%3A0xceb3df208b4b53a4!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20Salto!5e0!3m2!1spt-BR!2sbr!4v1698153187773!5m2!1spt-BR!2sbr"  loading="lazy"></iframe>
            <div>
              <RegularText weight={600} width={500}>Av. dos Três Poderes, 375 - Central Parque - Salto, SP</RegularText>
              <RegularText width={500}>Nosso hotel é facilmente acessível a partir dos principais aeroportos da região, incluindo o Aeroporto Internacional de Viracopos, que fica a 28km de distância.</RegularText>
            </div>
          </LocalizationMap>
        </div>
    </LocalizationContainer>
  )
}