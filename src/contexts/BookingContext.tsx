import { ReactNode, createContext, useReducer} from "react"
import { addNewBookingAction, calculateTotalPriceAction, removeRoomTypeAction, resetBookingDataAction, setCheckinAction, setCheckoutAction, setNumberOfGuestsAction, setNumberOfRoomsAction, setRoomTypeAction } from '../reducers/Booking/actions';
import { BookingReducer } from "../reducers/Booking/reducer";

interface TagType {
  id: number,
  name: string,
  description: string,
  icon: string,
}

export interface RoomType {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  occupantLimit: number;
  tags: TagType[];
}

export interface Booking {
  id: number;
  checkin: Date;
  checkout: Date;
  totalPrice: number;
  rooms: number;
  guest: number;
  roomType: RoomType[];
}

const initialData: Booking = {
  id: 1,
  checkin: new Date(),
  checkout: new Date(),
  totalPrice: 0,
  rooms: 0,
  guest: 0,
  roomType: [],
}

interface BookingContextType {
  booking: Booking;
  createNewBooking: (data: Booking) => void;
  setCheckin: (checkin: Date) => void;
  setCheckout: (checkout: Date) => void;
  setNumberOfRooms: (quantity: number) => void;
  setNumberOfGuests: (quantity: number) => void;
  calculateTotalPrice: () => void;
  setRoomType: (roomTypeId: number) => void;
  removeRoomType: (roomTypeId: number) => void;
  resetBookingData: () => void;
}

export const BookingContext = createContext({} as BookingContextType)

interface BookingContextProviderProps {
  children: ReactNode
}

export function BookingContextProvider({ children } : BookingContextProviderProps){
  const [booking, dispatch] = useReducer(BookingReducer, initialData);

  function createNewBooking(data: Booking){
    const id =  2;
    const newBooking: Booking = {
      id,
      checkin: data.checkin,
      checkout: data.checkout,
      rooms: data.rooms,
      guest: data.guest,
      totalPrice: data.totalPrice,
      roomType: data.roomType,
    }
    dispatch(addNewBookingAction(newBooking))
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
      createNewBooking,
      setNumberOfRooms,
      calculateTotalPrice,
      setNumberOfGuests,
      setRoomType,
      setCheckin,
      setCheckout,
      removeRoomType,
      resetBookingData
    }}>
      {children}
    </BookingContext.Provider>
  )
}