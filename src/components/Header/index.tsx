import { Link } from "react-router-dom";
import { BookButton, HeaderButtonsContainer, HeaderContainer, NavMenuToggle } from './styles';
import { List } from "phosphor-react";
import logo from "../../assets/logo.svg"

interface HeaderProps {
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ setMenuIsVisible } : HeaderProps){

  return (
    <HeaderContainer>
      <div className="container">
        <Link to="#">
          <img src={logo} width="123" height="66" alt="" />
        </Link>
        <nav>
          <HeaderButtonsContainer>
            <li><a href="#home">Hotel</a></li>
            <li><a href="#rooms">Acomodações</a></li>
            <li><a href="#gastronomy">Gastronomia</a></li>
            <li><a href="#localization">Localização</a></li>
            <li><a href="#contacts">Contato</a></li>
            <li><a href="">Login</a></li>
          </HeaderButtonsContainer>
        </nav>
        <div>
          <Link to="/reservar" >
            <BookButton>
              Reservar
            </BookButton>
          </Link>
          <NavMenuToggle>
            <List size={24} onClick={() => setMenuIsVisible(true)}/>
          </NavMenuToggle>
        </div>
      </div>
    </HeaderContainer>
  )
}