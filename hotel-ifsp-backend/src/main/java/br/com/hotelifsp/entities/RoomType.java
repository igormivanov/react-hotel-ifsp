package br.com.hotelifsp.entities;

import java.util.List;

import br.com.hotelifsp.dtos.RoomTypeDTO;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
public class RoomType {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private Integer price;
	private String description;
	private String photo;
	private Integer occupantLimit;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name="roomtype_roomtag",
			joinColumns= {@JoinColumn(name="roomtype_id")},
			inverseJoinColumns = {@JoinColumn(name="roomtag_id")})
    private List<RoomTag> roomtags;
	
	public RoomType() {		
	}

	public RoomType(Long id, String name, Integer price, String description, String photo, Integer occupantLimit,
			List<RoomTag> roomtags) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.photo = photo;
		this.occupantLimit = occupantLimit;
		this.roomtags = roomtags;
	}



	public RoomType(RoomTypeDTO data) {
		this.name = data.name();
		this.price = data.price();
		this.description = data.description();
		this.photo = data.photo();
		this.occupantLimit = data.occupantLimit();
		this.roomtags = data.roomtags();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public Integer getOccupantLimit() {
		return occupantLimit;
	}

	public void setOccupantLimit(Integer occupantLimit) {
		this.occupantLimit = occupantLimit;
	}

	public List<RoomTag> getRoomtags() {
		return roomtags;
	}

	public void setRoomtags(List<RoomTag> roomtags) {
		this.roomtags = roomtags;
	}
	
}
