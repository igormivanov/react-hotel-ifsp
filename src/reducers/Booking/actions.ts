import { Action, Booking } from "./reducer";

export enum ActionTypes {
  ADD_NEW_BOOKING = 'ADD_NEW_BOOKING',
  SET_CHECKIN = 'SET_CHECKIN',
  SET_CHECKOUT = 'SET_CHECKOUT',
  CALCULATE_TOTAL_PRICE = 'CALCULATE_TOTAL_PRICE',
  SET_NUMBER_OF_ROOMS = 'SET_NUMBER_OF_ROOMS',
  SET_NUMBER_OF_GUESTS = 'SET_NUMBER_OF_GUESTS',
  SET_ROOM_TYPE = 'SET_ROOM_TYPE',
  REMOVE_ROOM_TYPE = 'REMOVE_ROOM_TYPE',
  RESET_BOOKING_DATA = 'RESET_BOOKING_DATA',
}

export function addNewBookingAction(newBooking: Booking): Action {
  return {
    type: ActionTypes.ADD_NEW_BOOKING,
    payload: newBooking
  }
}

export function setCheckinAction(checkin: Date): Action {
  return {
    type: ActionTypes.SET_CHECKIN,
    payload: checkin,
  };
}

export function setCheckoutAction(checkout: Date): Action {
  return {
    type: ActionTypes.SET_CHECKOUT,
    payload: checkout,
  };
}

export function calculateTotalPriceAction(): Action{
  return {
    type: ActionTypes.CALCULATE_TOTAL_PRICE,
  } 
}

export function setNumberOfRoomsAction(quantity: number): Action{
  return {
    type: ActionTypes.SET_NUMBER_OF_ROOMS,
    payload: quantity,
  }
}

export function setNumberOfGuestsAction(quantity: number): Action{
  return {
    type: ActionTypes.SET_NUMBER_OF_GUESTS,
    payload: quantity,
  }
}

export function setRoomTypeAction(roomTypeId: number): Action{
  return {
    type: ActionTypes.SET_ROOM_TYPE,
    payload: roomTypeId,
  }
}

export function removeRoomTypeAction(roomTypeId: number): Action {
  return {
    type: ActionTypes.REMOVE_ROOM_TYPE,
    payload: roomTypeId,
  }
}

export function resetBookingDataAction(): Action{
  return {
    type: ActionTypes.RESET_BOOKING_DATA
  }
}