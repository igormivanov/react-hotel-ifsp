import { Link } from "react-router-dom";
import { EmptyBookingListContainer } from "./styles";

export function EmptyBookingList(){
  return (
    <EmptyBookingListContainer>
      <p>Ops!</p>
      <p>Parece que você ainda não possui uma reserva</p>
      <Link to="/booking">Fazer uma reserva</Link>
    </EmptyBookingListContainer>
  )
}