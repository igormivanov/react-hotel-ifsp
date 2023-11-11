import { differenceInDays } from "date-fns";
import { Trash } from "phosphor-react";
import { RegularText } from "../../../../components/Typography";
import { formatMoney } from "../../../../utils/formatMoney";
import { SelectedRoomsCard, SelectedRoomsContainer, TrashButton } from "./styles";
import { useBooking } from "../../../../hooks/useBooking";

export function SelectedRooms(){
  const {booking, removeRoomType} = useBooking()
  const numberOfNights = differenceInDays(booking.checkout, booking.checkin);

  function handleRemoveRoomType(roomTypeId: number){
    removeRoomType(roomTypeId);
  }

  return (
    <SelectedRoomsContainer>
      {booking.roomType.map((room) => {
        const total = room.price * numberOfNights;
        const totalFormatted = formatMoney(total);
        return (
          <SelectedRoomsCard key={room.id}>
            <div>
              <RegularText color="#250D08" width="auto" $textAlign="auto" size="m">{room.name}</RegularText>
              <TrashButton onClick={() => handleRemoveRoomType(room.id)} ><Trash size={16}/></TrashButton>
            </div>
            <div>
              <RegularText width="auto" $textAlign="auto" size="s">
                <span className="priceSymbol">R$</span>
                <span className="price">{room.price}</span>
                <span className="perNight">/noite</span>
                </RegularText>
              <RegularText width="auto" $textAlign="auto" size="s">
                <span className="priceSymbol">R$</span>
                <span className="price">{totalFormatted}</span>
              </RegularText>
            </div>
          </SelectedRoomsCard>
          )
        })}
    </SelectedRoomsContainer>
  )
}