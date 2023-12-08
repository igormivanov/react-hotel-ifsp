package br.com.hotelifsp.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.hotelifsp.dtos.BookingDTO;
import br.com.hotelifsp.dtos.UserBookingGetDTO;
import br.com.hotelifsp.entities.Booking;
import br.com.hotelifsp.entities.User;
import br.com.hotelifsp.services.BookingService;
import br.com.hotelifsp.services.UserService;

@RestController
@RequestMapping("api/v1/booking")
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private UserService userService;
	
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserBookingList(@PathVariable Long userId){
		Optional<User> optionalUser = userService.findById(userId);
		
		if (optionalUser.isEmpty()) {
	        return ResponseEntity.notFound().build();
	    }
		
		List<Booking> userBookingList = bookingService.findByUser(optionalUser.get());
		
		if(userBookingList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum reserva encontrada!");
		}
		
		List<UserBookingGetDTO> userBookingGetDTOList = new ArrayList<>();
		
		for(Booking booking : userBookingList) {
			
			UserBookingGetDTO userBookingGetDTO = new UserBookingGetDTO();
			
			userBookingGetDTO.setId(booking.getId());
			userBookingGetDTO.setCheckin(booking.getCheckin());
			userBookingGetDTO.setCheckout(booking.getCheckout());
			userBookingGetDTO.setGuestDetails(booking.getGuestDetails());
			userBookingGetDTO.setGuestQuantity(booking.getGuestQuantity());
			userBookingGetDTO.setRoomQuantity(booking.getGuestQuantity());
			userBookingGetDTO.setRoomTypes(booking.getRoomTypes());
			userBookingGetDTO.setTotalPrice(booking.getTotalPrice());
			userBookingGetDTOList.add(userBookingGetDTO);
		}
		
		
		return ResponseEntity.ok(userBookingGetDTOList);
	}
	
	@PostMapping
	public ResponseEntity<?> postBooking(@RequestBody BookingDTO bookingDTO){
		Booking booking = bookingService.createBookingFromDTO(bookingDTO);
		bookingService.save(booking);
		bookingService.createGuestDetailsList(booking);
		return ResponseEntity.ok().build();
	}
	
}
