import { ReactNode, createContext, useReducer, useState} from "react"
import { calculateTotalPriceAction, removeRoomTypeAction, resetBookingDataAction, setCheckinAction, setCheckoutAction, setNumberOfGuestsAction, setNumberOfRoomsAction, setRoomTypeAction } from '../reducers/Booking/actions';
import { BookingReducer } from "../reducers/Booking/reducer";
import { Booking } from "../types/Booking";
import { bookingService } from "../service/bookingService";
import { BookingDataResponse } from "../types/BookingDataResponse";

const initialData: Booking = {
  id: null,
  checkin: new Date(),
  checkout: new Date(),
  totalPrice: 0,
  rooms: 0,
  guest: 0,
  roomType: [],
  userId: null,
}

interface BookingContextType {
  booking: Booking;
  setCheckin: (checkin: Date) => void;
  setCheckout: (checkout: Date) => void;
  setNumberOfRooms: (quantity: number) => void;
  setNumberOfGuests: (quantity: number) => void;
  calculateTotalPrice: () => void;
  setRoomType: (roomTypeId: number) => void;
  removeRoomType: (roomTypeId: number) => void;
  resetBookingData: () => void;
  createNewBooking: (id: number) => void;
  userBookingList: BookingDataResponse[];
  findUserBookings: (userId: number) => void;
  resetUserBookingList: () => void;
}

export const BookingContext = createContext({} as BookingContextType)

interface BookingContextProviderProps {
  children: ReactNode
}

export function BookingContextProvider({ children } : BookingContextProviderProps){
  const [booking, dispatch] = useReducer(BookingReducer, initialData);
  const [userBookingList, setUserBookingList] = useState([])

  const api = bookingService()

  const resetUserBookingList = () => {
    setUserBookingList([]);
  }

  const findUserBookings = async (userId: number) => {
    const data = await api.findByUserId(userId);
    setUserBookingList(data);
  }

  async function createNewBooking(userId: number){
    return await api.save(
      booking.checkin,
      booking.checkout,
      booking.guest,
      booking.rooms,
      booking.totalPrice,
      booking.roomType,
      userId
    ).then(() => {
      findUserBookings(userId);
    });
  }

  function setCheckin(checkin: Date){
    dispatch(setCheckinAction(checkin))
  }

  function setCheckout(checkout: Date){
    dispatch(setCheckoutAction(checkout))
  }

  function calculateTotalPrice(){
    dispatch(calculateTotalPriceAction())
  }

  function setNumberOfRooms(quantity: number){
    dispatch(setNumberOfRoomsAction(quantity))
  }

  function setNumberOfGuests(quantity:  number){
    dispatch(setNumberOfGuestsAction(quantity))
  }

  function setRoomType(roomTypeId: number){
    dispatch(setRoomTypeAction(roomTypeId))
  }

  function removeRoomType(roomTypeId: number){
    dispatch(removeRoomTypeAction(roomTypeId))
  }

  function resetBookingData(){
    dispatch(resetBookingDataAction())
  }

  return (
    <BookingContext.Provider value={{
      booking,
      setNumberOfRooms,
      calculateTotalPrice,
      setNumberOfGuests,
      setRoomType,
      setCheckin,
      setCheckout,
      removeRoomType,
      resetBookingData,
      createNewBooking,
      userBookingList,
      findUserBookings,
      resetUserBookingList,
    }}>
      {children}
    </BookingContext.Provider>
  )
}