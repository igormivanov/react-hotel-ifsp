import { OrderDetailsMobileContainer, SelectedDatesMobile, SelectedRoomsAndGuestsMobile } from "./styles";
import { SelectedRooms } from "../SelectedRooms";
import { useBooking } from "../../../../hooks/useBooking";
import { differenceInDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { BsArrowRight } from "react-icons/bs";
import { RegularText } from "../../../../components/Typography";

interface MenuMobileProps {
  menuIsVisible: boolean;
}

export function OrderDetailsMobile({ menuIsVisible}: MenuMobileProps){

  const {booking} = useBooking()
  const numberOfNights = differenceInDays(booking.checkout, booking.checkin);

  return (
    <OrderDetailsMobileContainer isVisible={menuIsVisible}>
      <div>
        <SelectedDatesMobile>
          <RegularText size="s" width="auto">Datas escolhidas</RegularText>
          <div>
            <RegularText weight={600} size="xs" width="auto">{format(booking.checkin, "dd MMM", {locale: ptBR})}</RegularText>
            <BsArrowRight size={16}/>
            <RegularText weight={600} size="xs" width="auto">{format(booking.checkout, "dd MMM", {locale: ptBR})}</RegularText>
            <RegularText weight={600} size="xs" width="auto">( {numberOfNights} noites )</RegularText>
          </div>
        </SelectedDatesMobile>
        <SelectedRoomsAndGuestsMobile>
          <RegularText size="s" width="auto">Quartos / Hóspedes</RegularText>
          <div>
            <span>{booking.rooms}</span>
            <span>{booking.guest}</span>
          </div>
        </SelectedRoomsAndGuestsMobile>
      </div>
      <SelectedRooms/>
    </OrderDetailsMobileContainer>
  )
}