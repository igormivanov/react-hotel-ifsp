import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../../../assets/logo.svg'
import { AiFillCaretDown, AiFillCaretUp, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'
import { BookingNav, CountryLang, DropdownCard, HeaderContainer, LoginButton, UserDropdown} from "./styles";
import { RegularText } from "../../../../components/Typography";
import { useEffect, useState } from 'react';
import { MdLogout, MdOutlineCardTravel } from "react-icons/md";
import { useAuth } from "../../../../hooks/useAuth";
import { useBooking } from "../../../../hooks/useBooking";

export function BookingHeader() {
  const { user, signOut } = useAuth();
  const {resetBookingData} = useBooking();
  const [open, setOpen] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setOpen(false);
    }
  }, [location.pathname])

  function handleLogout(){
    signOut()
    resetBookingData();
    navigate("/login")
  }

  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <img src={logo} width="123" height="66" alt="" />
        </Link>
        <BookingNav>
          {location.pathname.trim().split('/')[1] == "booking" ? (
            <CountryLang>
              <img src="https://book.omnibees.com/icons/lang_pt-br_v4.svg" alt="Ícone do Brasil" />
              <RegularText size="s" width="auto">Português, BR / R$</RegularText>
            </CountryLang>
          ) : ''}
          { !user ? (
            <Link to="/login">
              <LoginButton>
                <AiOutlineUser size={16} />
                Minha conta
              </LoginButton>
            </Link>
          ) : 
              <UserDropdown onClick={() => setOpen((prevState) => !prevState)}>
                <div>
                  <AiOutlineUser size={16}/>
                  Olá {user.fullName.trim().split(' ')[0]}
                  {open ? <AiFillCaretUp size={14}/> : <AiFillCaretDown size={14}/>}
                </div>
                <DropdownCard open={open}>
                  <ul>
                    <li>
                      <AiOutlineSetting size={16}/>
                      <Link to="/guest/profile">Minha Conta</Link>
                    </li>
                    <li>
                      <MdOutlineCardTravel size={16}/>
                      <Link to="/guest/booking">Minhas Reservas</Link>
                    </li>
                    <li>
                      <MdLogout size={16}/>
                      <button onClick={handleLogout}>Encerrar sessão</button>
                    </li>
                  </ul>
                </DropdownCard>
              </UserDropdown>
          }
        </BookingNav>
      </div>
    </HeaderContainer>
  )
}