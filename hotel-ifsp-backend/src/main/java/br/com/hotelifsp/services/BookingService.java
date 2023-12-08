package br.com.hotelifsp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.hotelifsp.dtos.BookingDTO;
import br.com.hotelifsp.entities.Booking;
import br.com.hotelifsp.entities.GuestDetails;
import br.com.hotelifsp.entities.RoomType;
import br.com.hotelifsp.entities.User;
import br.com.hotelifsp.repositories.BookingRepository;
import br.com.hotelifsp.repositories.GuestDetailsRepository;
import br.com.hotelifsp.repositories.UserRepository;

@Service
public class BookingService {

	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired
	private GuestDetailsRepository guestDetailsRepository;
	
	@Autowired
	private RoomTypeService roomTypeService;
	
	public void save(Booking booking) {
		bookingRepository.save(booking);
	}
	
	public List<Booking> findAllById(Iterable<Long> id){
		return bookingRepository.findAllById(id);
	}
	
	public Booking createBookingFromDTO(BookingDTO bookingDTO) {
		
		Optional<User> optionalUser = userRepository.findById(bookingDTO.userId());
		
		List<RoomType> roomTypesList = new ArrayList<>();

		Booking booking = new Booking();
		booking.setCheckin(bookingDTO.checkin());
		booking.setCheckout(bookingDTO.checkout());
		booking.setGuestQuantity(bookingDTO.guestQuantity());
		booking.setRoomQuantity(bookingDTO.roomQuantity());
		booking.setTotalPrice(bookingDTO.totalPrice());
		booking.setUser(optionalUser.get());
		
		for(RoomType roomType : bookingDTO.roomTypes()) {
			roomTypesList.add(roomTypeService.findById(roomType.getId()).get());
			
		}
		
		booking.setRoomTypes(roomTypesList);
		
		return booking;
	}
	
	public void createGuestDetailsList(Booking booking) {
		
		List<GuestDetails> guestDetailsList = new ArrayList<>();
		for(int i=0; i < booking.getGuestQuantity(); i++) {
			GuestDetails guestDetails = new GuestDetails();
			if(i == 0) {
				guestDetails.setCpf(booking.getUser().getCpf());
				guestDetails.setFullName(booking.getUser().getFullName());
				if(booking.getUser().getPhone() != null) {
					guestDetails.setPhone(booking.getUser().getPhone());
					
				}
				if(booking.getUser().getAdress() != null) guestDetails.setAdress(booking.getUser().getAdress());
			}
			guestDetails.setBooking(booking);
			guestDetailsList.add(guestDetails);	
		}
		
		guestDetailsRepository.saveAll(guestDetailsList);
		booking.setGuestDetails(guestDetailsList);
	}
	
	public List<Booking> findByUser(User user) {
		return bookingRepository.findByUser(user);
	}
}
