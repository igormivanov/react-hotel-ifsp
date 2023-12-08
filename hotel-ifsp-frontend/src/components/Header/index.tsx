import { Link } from "react-router-dom";
import { BookButton, HeaderButtonsContainer, HeaderContainer, NavMenuToggle } from './styles';
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.svg"

interface HeaderProps {
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  hasUser: boolean;
}

export function Header({ setMenuIsVisible, hasUser } : HeaderProps){

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
            <Link to={hasUser ? '/guest/booking' : '/login'}>Login</Link>
          </HeaderButtonsContainer>
        </nav>
        <div>
          <Link to="/booking" >
            <BookButton>
              Reservar
            </BookButton>
          </Link>
          <NavMenuToggle>
            <AiOutlineMenu size={24} onClick={() => setMenuIsVisible(true)}/>
          </NavMenuToggle>
        </div>
      </div>
    </HeaderContainer>
  )
}