import { ConfirmContainer, MainContent, OrderDetailsMobileStyle, RoomCards, RoomTypeSelection, TopCard} from "./styles";
import { RegularText, TitleText } from "../../../components/Typography";
import { RoomTypeCard } from "../components/RoomTypeCard";


import { roomTypes } from "../../../data/rooms";
import { OrderDetails } from "../components/OrderDetails";
import { AiFillCaretDown, AiFillCaretUp,} from "react-icons/ai";
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { formatMoney } from "../../../utils/formatMoney";
import { OrderDetailsMobile } from "../components/OrderDetailsMobile";
import { useBooking } from "../../../hooks/useBooking";
import { useState } from "react";

export function ConfirmPage(){

  const {booking} = useBooking()
  const bookingTotalPriceFormatted = formatMoney(booking.totalPrice)
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [roomTypeError, setRoomTypeError] = useState(false);

  return (
    <ConfirmContainer>
      <OrderDetailsMobileStyle>
        <div>
          {menuIsVisible === false ? 
          <AiFillCaretUp size={16} onClick={() => setMenuIsVisible(prevState => !prevState)}/> : 
          <AiFillCaretDown size={16} onClick={() => setMenuIsVisible(prevState => !prevState)}/>
          }
          <RegularText width="auto" $textAlign="auto" color="#518209">
            <span className="priceSymbol">R$</span>
            <span className="price">{bookingTotalPriceFormatted}</span>
          </RegularText>
        </div>
        <button>Finalizar reserva</button>
      </OrderDetailsMobileStyle>
      <OrderDetailsMobile menuIsVisible={menuIsVisible}/>
      <MainContent className="container">
        <RoomTypeSelection>
          <TopCard>
            <Link to="/booking">
              <BsArrowLeft/>
              Voltar
            </Link>
            <TitleText $textAlign="start" size="s" weight="bold">Selecione um quarto</TitleText>
          </TopCard>
          <RoomCards>
            {roomTypes.map((room) => {
              return (
                <RoomTypeCard setRoomTypeError={setRoomTypeError} key={room.id} room={room}/>
              )
            })}
          </RoomCards>
        </RoomTypeSelection>
        <OrderDetails setRoomTypeError={setRoomTypeError} roomTypeError={roomTypeError}/>
      </MainContent>
    </ConfirmContainer>
  )
}