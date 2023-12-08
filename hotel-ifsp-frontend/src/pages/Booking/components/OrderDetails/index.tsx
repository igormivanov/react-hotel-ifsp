import { Details, OrderDetailsContainer,  ProceedToPaymentButton,   StayDates,  TotalPrice, } from "./styles";
import { ptBR } from "date-fns/locale";
import { BsArrowRight } from 'react-icons/bs'
import { differenceInDays, format } from "date-fns";
import { TitleText, RegularText } from "../../../../components/Typography";
import { formatMoney } from '../../../../utils/formatMoney';
import { SelectedRooms } from "../SelectedRooms";
import { useBooking } from "../../../../hooks/useBooking";
import { useAuth } from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface OrderDetailsProps {
  roomTypeError: boolean;
  setRoomTypeError: React.Dispatch<React.SetStateAction<boolean>>
}

export function OrderDetails({roomTypeError, setRoomTypeError}: OrderDetailsProps){

  const {booking, createNewBooking} = useBooking();
  const { user } = useAuth();
  const numberOfNights = differenceInDays(booking.checkout, booking.checkin);
  const bookingTotalPriceFormatted = formatMoney(booking.totalPrice)
  const navigate = useNavigate();
  

  function handleFinalizeBooking(){
    if(booking.roomType.length > 0){
      if(user){
        createNewBooking(user?.id);
        return navigate("/guest/event");
      }
      return navigate("/login");
    }
    setRoomTypeError(true);
  }

  return (
    <OrderDetailsContainer>
      <TitleText size="xs" >Minha reserva</TitleText>
      <StayDates>
        <RegularText size="s" width="auto">Datas escolhidas</RegularText>
        <div>
          <RegularText weight={600} size="s" width="auto">{format(booking.checkin, "dd MMM", {locale: ptBR})}</RegularText>
          <BsArrowRight size={16}/>
          <RegularText weight={600} size="s" width="auto">{format(booking.checkout, "dd MMM", {locale: ptBR})}</RegularText>
          <RegularText weight={600} size="xs" width="auto">( {numberOfNights} noites )</RegularText>
        </div>
      </StayDates>
      <Details>
        <div>
          <dt>Nº de Quartos:</dt>
          <dd>{booking.rooms}</dd>
        </div>
        <div>
          <dt>Nº de hóspedes:</dt>
          <dd>{booking.guest}</dd>
        </div>
      </Details>
      <SelectedRooms/>
      <TotalPrice>
        <div>
          <RegularText $textAlign="start" color="#250D08" width="auto">Valor total:</RegularText>
          <RegularText $textAlign="auto" color="#518209" width="auto">
            <span className="priceSymbol">R$</span>
            <span className="price">{bookingTotalPriceFormatted}</span>
          </RegularText>
        </div>
        <RegularText $textAlign="end" width="auto" size="xs">inclui impostos e taxas</RegularText>
      </TotalPrice>

      <ProceedToPaymentButton>
        {roomTypeError && <p>Selecione um quarto para continuar</p>}
        <button type="button" onClick={handleFinalizeBooking} >Finalizar reserva</button>
      </ProceedToPaymentButton >
    </OrderDetailsContainer>
  )
}