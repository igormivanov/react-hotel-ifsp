import { GuestDetail } from "./GuestDetail";
import { RoomType } from "./RoomType";

export interface BookingDataResponse {
  id: number;
  totalPrice: number;
  checkin: Date;
  checkout: Date;
  roomsQuantity: number;
  guestQuantity: number;
  guestDetails: GuestDetail[]
  roomTypes: RoomType[];
}