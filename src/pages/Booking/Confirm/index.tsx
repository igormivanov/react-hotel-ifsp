import { ConfirmContainer, OrderDetailsMobileStyle, RoomCards, RoomTypeSelection, TopCard} from "./styles";
import { RegularText, TitleText } from "../../../components/Typography";
import { RoomTypeCard } from "../components/RoomTypeCard";


import { roomTypes } from "../../../data/rooms";
import { OrderDetails } from "../components/OrderDetails";
import {  ArrowLeft, CaretDown, CaretUp } from "phosphor-react";
import { Link } from "react-router-dom";
import { formatMoney } from "../../../utils/formatMoney";
import { OrderDetailsMobile } from "../components/OrderDetailsMobile";
import { useBooking } from "../../../hooks/useBooking";
import { useState } from "react";

export function ConfirmPage(){

  const {booking} = useBooking()
  const bookingTotalPriceFormatted = formatMoney(booking.totalPrice)

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <ConfirmContainer>
      <OrderDetailsMobileStyle>
        <div>
          {menuIsVisible === false ? 
          <CaretUp size={16} onClick={() => setMenuIsVisible(prevState => !prevState)}/> : 
          <CaretDown size={16} onClick={() => setMenuIsVisible(prevState => !prevState)}/>
          }
          <RegularText width="auto" $textAlign="auto" color="#518209">
            <span className="priceSymbol">R$</span>
            <span className="price">{bookingTotalPriceFormatted}</span>
          </RegularText>
        </div>
        <button>Reservar Agora</button>
      </OrderDetailsMobileStyle>
      <OrderDetailsMobile
        menuIsVisible={menuIsVisible} 
      />
      <div className="container">
        <RoomTypeSelection>
          <TopCard>
            <Link to="/booking">
              <ArrowLeft/>
              Voltar
            </Link>
            <TitleText $textAlign="start" size="s" weight="bold">Selecione um quarto</TitleText>
          </TopCard>
          <RoomCards>
            {roomTypes.map((room) => {
              return (
                <RoomTypeCard key={room.id} room={room}/>
              )
            })}
          </RoomCards>
        </RoomTypeSelection>
        <OrderDetails/>
      </div>
    </ConfirmContainer>
  )
}