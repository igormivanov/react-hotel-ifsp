package br.com.hotelifsp.entities;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Integer totalPrice;
	private LocalDate checkin;
	private LocalDate checkout;
	private Integer roomQuantity;
	private Integer guestQuantity;
	
	@OneToMany(mappedBy = "booking", cascade = CascadeType.ALL)
	private List<GuestDetails> guestDetails;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name="booking_roomtype",
			joinColumns= {@JoinColumn(name="booking_id")},
			inverseJoinColumns = {@JoinColumn(name="roomtype_id")})
    private List<RoomType> roomTypes;

	public Booking() {
	}
	
	public Booking(Long id, Integer totalPrice, LocalDate checkin, LocalDate checkout, Integer roomQuantity,
			Integer guestQuantity, List<GuestDetails> guestDetails, User user, List<RoomType> roomTypes) {
		this.id = id;
		this.totalPrice = totalPrice;
		this.checkin = checkin;
		this.checkout = checkout;
		this.roomQuantity = roomQuantity;
		this.guestQuantity = guestQuantity;
		this.guestDetails = guestDetails;
		this.user = user;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<RoomType> getRoomTypes() {
		return roomTypes;
	}

	public void setRoomTypes(List<RoomType> roomTypes) {
		this.roomTypes = roomTypes;
	}
	
	
}
