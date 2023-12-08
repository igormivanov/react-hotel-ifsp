import { api } from "../lib/axios"
import { RoomType } from "../types/RoomType";

// interface BookingDataRequestTypes{
//   checkin: Date,
//   checkout: Date,
//   guest: number,
//   rooms: number,
//   totalPrice: number,
//   roomType: RoomType[],
//   userId: number | null,
// }



export const bookingService = () => ({
  save: async (
    checkin: Date,
    checkout: Date,
    guestQuantity: number,
    roomQuantity: number,
    totalPrice: number,
    roomTypes: RoomType[],
    userId: number
  ) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await api.post('/booking', {
        checkin,
        checkout,
        guestQuantity,
        roomQuantity,
        totalPrice,
        roomTypes,
        userId
      },{
        headers: {
          'Authorization': `Bearer ${token}`
        }});
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer reserva:', error);
      throw error;
    }
  },
  findByUserId: async (userId: number) => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await api.get(`/booking/${userId}`, {
        headers: {'Authorization': `Bearer ${token}`}
      });
      return response.data;
    } catch (error) {
      throw (error as Error).message;
    }
  }
})