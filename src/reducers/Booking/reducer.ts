// import { RoomType } from "../../contexts/BookingContext";
import { roomTypes } from "../../data/rooms";
import { ActionTypes } from "./actions";
import { differenceInDays } from "date-fns";

interface TagType {
  id: number,
  name: string,
  description: string,
  icon: string,
}

interface RoomType {
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

export type Action =
  | { type: ActionTypes.ADD_NEW_BOOKING; payload: Booking}
  | { type: ActionTypes.SET_CHECKIN; payload: Date }
  | { type: ActionTypes.SET_CHECKOUT; payload: Date }
  | { type: ActionTypes.CALCULATE_TOTAL_PRICE }
  | { type: ActionTypes.SET_NUMBER_OF_ROOMS; payload: number }
  | { type: ActionTypes.SET_NUMBER_OF_GUESTS; payload: number }
  | { type: ActionTypes.SET_ROOM_TYPE; payload: number }
  | { type: ActionTypes.REMOVE_ROOM_TYPE; payload: number}
  | { type: ActionTypes.RESET_BOOKING_DATA}

export function BookingReducer(state : Booking, action : Action){
  const numberOfNights = differenceInDays(state.checkout, state.checkin);
  switch(action.type) {
    case ActionTypes.SET_CHECKIN:
      return {
        ...state, 
        checkin: action.payload 
      };
    case ActionTypes.SET_CHECKOUT:
      return {
        ...state, 
        checkout: action.payload 
      };
    case ActionTypes.CALCULATE_TOTAL_PRICE: {

      if(state.roomType.length > 0){
        let total = 0;
        state.roomType.map((room) => {
          return (
            total += numberOfNights * room.price
          )
        })
        return {
          ...state,
          totalPrice: total
        };
      }
      return state
    }
    case ActionTypes.SET_NUMBER_OF_ROOMS: 
      return {
        ...state, 
        rooms: action.payload
      };
    case ActionTypes.SET_NUMBER_OF_GUESTS:
      return {
        ...state, 
        guest: action.payload
      };
    case ActionTypes.SET_ROOM_TYPE: {

      const selectedRoom = roomTypes.find(room => room.id === action.payload);

      if(selectedRoom){
        return {
          ...state,
          roomType: [...state.roomType, selectedRoom],
        } 
      }
      return state;
    }
    case ActionTypes.REMOVE_ROOM_TYPE: {
      
      const foundIndex = state.roomType.findIndex(room => room.id === action.payload);
      const updatedRoomTypes = [...state.roomType];
      updatedRoomTypes.splice(foundIndex, 1);
      const newTotalPrice = updatedRoomTypes.reduce((total, room) => total + (room.price * numberOfNights), 0);

      return {
        ...state,
        roomType: updatedRoomTypes,
        totalPrice: newTotalPrice,
      }
    }
    case ActionTypes.RESET_BOOKING_DATA: {
      return {
        ...state,
        checkin: new Date(),
        checkout: new Date(),
        totalPrice: 0,
        rooms: 0,
        guest: 0,
        roomType: [],
      }
    }
    default: 
      return state;
  }
}