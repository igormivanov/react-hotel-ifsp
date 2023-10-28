import { Line } from "../../../../components/Line";
import { RegularText, TitleText } from "../../../../components/Typography";
import { DetailsButton, DetailsButtonGroup, DetailsContainer } from "./styles";

export function Details() {
  return (
    <DetailsContainer id="details">
      <div className='container'>
        <TitleText size="xl">Hotel IFSP & Spa Salto</TitleText>
        <Line/>
        <RegularText>Situado em uma localização única, cercado pela exuberante natureza e com vista para as belas paisagens de Salto, nosso hotel é um refúgio magnífico e encantador no coração de São Paulo. Localizado a uma curta distância do centro da cidade de Salto, nosso hotel oferece uma escapada tranquila cercada pela beleza natural da região.</RegularText>
        <RegularText>Nosso estabelecimento estabelece o padrão de bem-estar e sofisticação, tornando-se o destino ideal para aqueles que buscam qualidade de vida, conforto e o aconchego das deslumbrantes belezas naturais de Salto.</RegularText>
        <DetailsButtonGroup>
          <DetailsButton>Saiba mais</DetailsButton> 
          <DetailsButton>Reserve agora</DetailsButton>
        </DetailsButtonGroup>
      </div>
    </DetailsContainer>
  )
}