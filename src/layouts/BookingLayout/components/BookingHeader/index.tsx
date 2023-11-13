import { Link } from "react-router-dom";
import logo from '../../../../assets/logo.svg'
import { AiOutlineUser } from 'react-icons/ai'
import { BookingNav, HeaderContainer, LoginButton } from "./styles";
import { RegularText } from "../../../../components/Typography";

export function BookingHeader() {
  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <img src={logo} width="123" height="66" alt="" />
        </Link>
        <BookingNav>
          <div>
            <img src="https://book.omnibees.com/icons/lang_pt-br_v4.svg" alt="Ícone do Brasil" />
            <RegularText size="s" width="auto">Português, BR / R$</RegularText>
          </div>
          <Link to="/login">
            <LoginButton>
              <AiOutlineUser size={16} />
              Minha conta
            </LoginButton>
          </Link>
        </BookingNav>
      </div>
    </HeaderContainer>
  )
}