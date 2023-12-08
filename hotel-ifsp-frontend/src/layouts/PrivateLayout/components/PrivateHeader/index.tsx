import { NavLink } from "react-router-dom";
import { HeaderNav, MobileHeaderNav, NameDiv, PrivateHeaderContainer } from "./styles";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../../../../hooks/useAuth";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useBooking } from "../../../../hooks/useBooking";

interface PrivateHeaderProps {
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PrivateHeader({setMenuIsVisible} : PrivateHeaderProps){

  const { user, signOut } = useAuth();
  const {resetBookingData} = useBooking();
  const handleLogout = () => {
    resetBookingData();
    signOut();
  }

  return (
    <PrivateHeaderContainer>
      <div className="container">
        <NameDiv>
          <FaRegUserCircle size={20}/>
          {user?.fullName}
        </NameDiv>
        <MobileHeaderNav>
          <AiOutlineMenu onClick={() => setMenuIsVisible(true)} size={18}/>
          <MdLogout onClick={handleLogout} size={18}/>
        </MobileHeaderNav>
        <HeaderNav>
          <ul>
            <li><NavLink to="/guest/event">Eventos</NavLink></li>
            <li><NavLink to="/guest/booking">Minhas Reservas</NavLink></li>
            <li><NavLink to="/guest/profile">Minha conta</NavLink></li>
            <li>|</li>
            <li>
              <div>
                <MdLogout size={16}/>
                <button onClick={handleLogout}>Terminar Sessão</button>
              </div>
            </li>
          </ul>
        </HeaderNav>


      </div>
    </PrivateHeaderContainer>
  )
}