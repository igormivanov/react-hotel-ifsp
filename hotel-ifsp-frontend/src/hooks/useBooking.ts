import { useContext } from "react";
import { BookingContext } from "../contexts/BookingContext";

export function useBooking(){
  const context = useContext(BookingContext);
  return context;
}