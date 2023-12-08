import { AiOutlineCheckCircle } from "react-icons/ai";
import { RegularText } from "../../../../../components/Typography";
// import { useBooking } from "../../../../../hooks/useBooking";
import { BookingCard, BookingCardTitle, BookingDates, BookingDetails, BookingsContainer, DetailsGrid, EditBooking, GuestDetailsCheck } from "./styles";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { BookingDataResponse } from "../../../../../types/BookingDataResponse";

interface BookingsProps {
  bookings: BookingDataResponse[];
}

export function Bookings({bookings}: BookingsProps){
  const randomNumber = Math.floor(Math. random() * (99999 - 10000 + 1))
  return (
    <BookingsContainer>
      {bookings.map(booking => {
        const checkinDate = new Date(booking.checkin);
        const checkoutDate = new Date(booking.checkout)
        
        return (
          <BookingCard key={booking.id} expire={checkoutDate < new Date()}>
            <BookingDetails>
              <img width={130} height={100} src={booking.roomTypes[0].photo} alt="" />
              <div>
                <BookingCardTitle>
                  <h2>{booking.roomTypes[0].name}</h2>
                  {booking.roomTypes.length > 1 && <p>{`+ ${booking.roomTypes.length - 1} outro(s) quarto(s)`}</p>}
                </BookingCardTitle>
                <DetailsGrid>
                  <div>
                    <RegularText
                        $textAlign="auto"
                        size="s"
                        width="auto"
                      >
                        Número da reserva: <span className="bookingNumber">#{booking.id}{randomNumber}</span>
                    </RegularText>
                    <GuestDetailsCheck>
                      Dados dos hóspedes<AiOutlineCheckCircle size={16}/>
                    </GuestDetailsCheck>
                  </div>
                  <div>
                    <RegularText
                      $textAlign="auto"
                      size="s"
                      width="auto"
                    >
                      Preço total: R$ {booking.totalPrice}
                    </RegularText>
                    <RegularText
                      $textAlign="auto"
                      size="s"
                      width="auto"
                    >
                      Quantidade de hóspedes: {booking.guestQuantity}
                    </RegularText>
                  </div>
                </DetailsGrid>
                <EditBooking to="#">Editar Reserva</EditBooking>
              </div>
            </BookingDetails>
            <BookingDates>
              <div>
                <h5>Check-in</h5>
                <p>{checkinDate.getDate()}</p>
                <p>{format(checkinDate, "MMMM", { locale: ptBR })}</p>
              </div>
              <div>
                <h5>Check-out</h5>
                <p>{checkoutDate.getDate()}</p>
                <p>{format(checkoutDate, "MMMM", { locale: ptBR })}</p>
              </div>
            </BookingDates>
          </BookingCard>
        )
      })}
    </BookingsContainer>
  )
}