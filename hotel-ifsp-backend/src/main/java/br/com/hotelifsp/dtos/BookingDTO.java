package br.com.hotelifsp.dtos;

import java.time.LocalDate;
import java.util.List;

import br.com.hotelifsp.entities.RoomType;

public record BookingDTO(
		Integer totalPrice,
		LocalDate checkin,
		LocalDate checkout,
		Integer roomQuantity,
		Integer guestQuantity,
		Long userId,
		List<RoomType> roomTypes
		) {

}
