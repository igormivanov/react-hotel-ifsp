package br.com.hotelifsp.dtos;

import java.time.LocalDate;
import java.util.List;

import br.com.hotelifsp.entities.GuestDetails;
import br.com.hotelifsp.entities.RoomType;

public class UserBookingGetDTO {
	
	private Long id;
	private Integer totalPrice;
	private LocalDate checkin;
	private LocalDate checkout;
	private Integer roomQuantity;
	private Integer guestQuantity;
	private List<GuestDetails> guestDetails;
	private List<RoomType> roomTypes;
	
	public UserBookingGetDTO() {
	}
	
	public UserBookingGetDTO(Long id, Integer totalPrice, LocalDate checkin, LocalDate checkout, Integer roomQuantity,
			Integer guestQuantity, List<GuestDetails> guestDetails, List<RoomType> roomTypes) {
		this.id = id;
		this.totalPrice = totalPrice;
		this.checkin = checkin;
		this.checkout = checkout;
		this.roomQuantity = roomQuantity;
		this.guestQuantity = guestQuantity;
		this.guestDetails = guestDetails;
		this.roomTypes = roomTypes;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(Integer totalPrice) {
		this.totalPrice = totalPrice;
	}
	public LocalDate getCheckin() {
		return checkin;
	}
	public void setCheckin(LocalDate checkin) {
		this.checkin = checkin;
	}
	public LocalDate getCheckout() {
		return checkout;
	}
	public void setCheckout(LocalDate checkout) {
		this.checkout = checkout;
	}
	public Integer getRoomQuantity() {
		return roomQuantity;
	}
	public void setRoomQuantity(Integer roomQuantity) {
		this.roomQuantity = roomQuantity;
	}
	public Integer getGuestQuantity() {
		return guestQuantity;
	}
	public void setGuestQuantity(Integer guestQuantity) {
		this.guestQuantity = guestQuantity;
	}
	public List<GuestDetails> getGuestDetails() {
		return guestDetails;
	}
	public void setGuestDetails(List<GuestDetails> guestDetails) {
		this.guestDetails = guestDetails;
	}
	public List<RoomType> getRoomTypes() {
		return roomTypes;
	}
	public void setRoomTypes(List<RoomType> roomTypes) {
		this.roomTypes = roomTypes;
	}
		
	

}
