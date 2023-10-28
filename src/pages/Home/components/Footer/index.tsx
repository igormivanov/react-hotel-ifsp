import { RegularText } from "../../../../components/Typography";
import { Contacts, FooterCopyright, FooterContainer, NavList, Social} from "./styles";
import {LinkedinLogo, InstagramLogo, FacebookLogo, Copyright} from 'phosphor-react'

export function Footer() {
  return (
    <FooterContainer id="contacts">
      <div className="container">
        <Contacts>
          <RegularText size="s" width={240}>Av. dos Três Poderes, 375 <br></br> Central Parque - Salto, SP</RegularText>
          <RegularText size="s"width={240}>E-mail <br></br> reservas@hotelifsp.com.br</RegularText>
          <RegularText size="s" width={240}>Telefone (11) 1234 4321 <br></br> WhatsApp (11) 12122 3131</RegularText>
        </Contacts>
        <Social>
          <RegularText weight="bold" size="s">-SIGA-NOS-</RegularText> 
          <div>
            <LinkedinLogo size={24} />
            <InstagramLogo size={24} />
            <FacebookLogo size={24} />
          </div>
        </Social>
        <NavList>
          <ul>
            <li><a href="#home">Hotel</a></li>
            <li><a href="#rooms">Acomodações</a></li>
            <li><a href="#gastronomy">Gastronomia</a></li>
            <li><a href="#localization">Localização</a></li>
            <li><a href="#contacts">Contato</a></li>
            <li><a href="">Login</a></li>
          </ul>
        </NavList>
        <FooterCopyright><Copyright/>2023 - Hotel IFSP - Todos os direitos reservados | Desenvolvido por alunos</FooterCopyright>
      </div>
    </FooterContainer>
  )
}