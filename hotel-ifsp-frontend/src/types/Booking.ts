import { RoomType } from "./RoomType";

export interface Booking {
  id: number | null;
  checkin: Date;
  checkout: Date;
  totalPrice: number;
  rooms: number;
  guest: number;
  roomType: RoomType[];
  userId: number | null;
}