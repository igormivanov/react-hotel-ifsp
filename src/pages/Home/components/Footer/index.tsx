import { RegularText } from "../../../../components/Typography";
import { Contacts, FooterCopyright, FooterContainer, NavList, Social} from "./styles";
import {AiFillLinkedin, AiOutlineInstagram, AiFillFacebook, AiOutlineCopyrightCircle} from 'react-icons/ai'

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
          <RegularText width={100} weight="bold" size="s">-SIGA-NOS-</RegularText> 
          <div>
            <AiFillLinkedin size={24} />
            <AiOutlineInstagram size={24} />
            <AiFillFacebook size={24} />
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
        <FooterCopyright><AiOutlineCopyrightCircle/>2023 - Hotel IFSP - Todos os direitos reservados | Desenvolvido por alunos</FooterCopyright>
      </div>
    </FooterContainer>
  )
}