package br.com.hotelifsp.dtos;

import java.util.List;

import br.com.hotelifsp.entities.RoomTag;

public record RoomTypeDTO(
	String name,
	Integer price,
	String description,
	String photo,
	Integer occupantLimit,
    List<RoomTag> roomtags
		) {

}
