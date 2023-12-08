package br.com.hotelifsp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.hotelifsp.dtos.RoomTypeDTO;
import br.com.hotelifsp.entities.RoomType;
import br.com.hotelifsp.services.RoomTypeService;

@RestController
@RequestMapping("api/v1/roomtype")
public class RoomTypeController {

	@Autowired
	private RoomTypeService roomTypeService;
	
	@GetMapping
	public ResponseEntity<?> getAllRoomTypes(){
		List<RoomType> roomTypeList = roomTypeService.findAll();
		return ResponseEntity.ok(roomTypeList);
	}
	
	@PostMapping
	public ResponseEntity<?> postRoomType(@RequestBody RoomTypeDTO data){
		RoomType roomType = new RoomType(data);
		roomTypeService.save(roomType);
		return ResponseEntity.ok().build();
	}
}
