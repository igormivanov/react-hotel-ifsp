import { useTheme } from "styled-components";
import { Loader } from "../../../components/Loader";
import { TitleText } from "../../../components/Typography";
import { useAuth } from "../../../hooks/useAuth"
import { useBooking } from "../../../hooks/useBooking"
import React, { useEffect, useState } from 'react';
import { BookingLink, FilterBar, MyBookingContainer} from "./styles";
import { Link } from "react-router-dom";
import { Bookings } from "./components/BookingCard";
import { EmptyBookingList } from "./components/EmptyBookingList";
import { BookingDataResponse } from "../../../types/BookingDataResponse";

export function MyBookingPage(){

  const {userBookingList, findUserBookings} = useBooking();
  const {user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [filteredBookings, setFilteredBookings] = useState<BookingDataResponse[]>(userBookingList);

  const {colors} = useTheme()

  useEffect(() => {
    if (userBookingList.length > 0) {
      setFilteredBookings(userBookingList);
    }
    
    if(user && userBookingList.length === 0){
      handleFindUserBookingList(user?.id);
    }
  }, [userBookingList])

  const handleFindUserBookingList = async (userId: number) => {
    setIsLoading(true)
    setTimeout(async () => {
      try {
        await findUserBookings(userId);
        setIsLoading(false)
      } catch(message){
        setIsLoading(false);
      }
    }, 3000)
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
    switch(event.target.value){
      case null: 
        return setFilteredBookings(userBookingList);
      case 'active': {
        const activeBookings = userBookingList.filter(booking => {
          const checkoutDate = new Date(booking.checkout);
          return checkoutDate >= new Date();
        });
        return setFilteredBookings(activeBookings)
      }
      case 'expired': {
        const inactiveBookings = userBookingList.filter(booking => {
          const checkoutDate = new Date(booking.checkout);
          return checkoutDate < new Date();
        });
        return setFilteredBookings(inactiveBookings)
      }
      default: 
      return setFilteredBookings(userBookingList);
    }
  }

  return (
    <MyBookingContainer>
      <div className="container">
      
      <TitleText size="m" $textAlign="start" color={colors["brand-red-500"]}>
        Minhas Reservas
      </TitleText>

      {userBookingList.length > 0 && (
        <FilterBar>
          <p>Selecione uma opção:</p>
          <select className="dropdown" onChange={handleFilterChange}>
            <option value=''>-- Todas reservas --</option>
            <option value='active'>Reservas ativas</option>
            <option value='expired'>Reservas expiradas</option>
          </select>
        </FilterBar>
      )}

      <BookingLink>
        <Link to="/booking">Faça uma reserva</Link>
      </BookingLink>

      {isLoading ? (
        <Loader/>
      ) : userBookingList.length == 0 ? (
        <EmptyBookingList/>
      ) : (
        <Bookings bookings={filteredBookings}/> 
      )}

    </div>
    </MyBookingContainer>
  )
}