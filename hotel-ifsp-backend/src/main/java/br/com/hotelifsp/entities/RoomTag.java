package br.com.hotelifsp.entities;

import br.com.hotelifsp.dtos.RoomTagDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RoomTag {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private String description;
	private String icon;
	
	public RoomTag() {
	}
	
	public RoomTag(Long id, String name, String description, String icon) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.icon = icon;
	}



	public RoomTag(RoomTagDTO data) {
		this.name = data.name();
		this.description = data.description();
		this.icon = data.icon();
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
}
