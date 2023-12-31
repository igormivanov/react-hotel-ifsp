import { AiOutlineClose } from "react-icons/ai";
import { MenuMobileContainer } from "./styles";
import {useEffect} from 'react'
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";

interface MenuMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string | null;
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible, userName}: MenuMobileProps) {

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <MenuMobileContainer isVisible={menuIsVisible}>
      <AiOutlineClose size={24} onClick={() => setMenuIsVisible(false)}/>
      <img src={logo} width="123" height="66"/>
      <nav>
        
        <ul onClick={() => setMenuIsVisible(false)}>
          <li><a href="#details">Hotel</a></li>
          <li><a href="#rooms">Acomodações</a></li>
          <li><a href="#gastronomy">Gastronomia</a></li>
          <li><a href="#localization">Localização</a></li>
          <li><a href="#contacts">Contato</a></li>
          <Link to={userName ? '/guest/booking' : '/login'}>
            {userName ? userName : 'Login'}
          </Link>
        </ul>
      </nav>
    </MenuMobileContainer>
  )
}