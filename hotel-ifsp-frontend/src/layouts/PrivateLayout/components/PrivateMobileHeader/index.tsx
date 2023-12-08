import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PrivateMobileHeaderContainer } from "./styles";
import logo from '../../../../assets/logo.svg'

interface PrivateMobileHeaderProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PrivateMobileHeader({ menuIsVisible, setMenuIsVisible }: PrivateMobileHeaderProps){
  return (
    <PrivateMobileHeaderContainer isVisible={menuIsVisible}>
      <AiOutlineClose size={24} onClick={() => setMenuIsVisible(false)}/>
      <img src={logo} width="123" height="66"/>
      <nav>
        <ul onClick={() => setMenuIsVisible(false)}>
          <li><Link to="/guest/event">Eventos</Link></li>
          <li><Link to="/guest/booking">Minhas reservas</Link></li>
          <li><Link to="guest/profile">Minha conta</Link></li>
        </ul>
      </nav>
    </PrivateMobileHeaderContainer>
  )
}