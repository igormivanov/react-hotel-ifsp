import { Outlet } from "react-router-dom";
import { BookingLayoutContainer } from "./styles";
import { BookingHeader } from "./components/BookingHeader";
import { BookingFooter } from "./components/BookingFooter";

export function BookingLayout(){
  return (
    <BookingLayoutContainer>
      <BookingHeader/>
      <Outlet/>
      <BookingFooter/>
    </BookingLayoutContainer>
    
  )
}