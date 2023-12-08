package br.com.hotelifsp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.hotelifsp.dtos.RoomTagDTO;
import br.com.hotelifsp.entities.RoomTag;
import br.com.hotelifsp.services.RoomTagService;

@RestController
@RequestMapping("api/v1/tag")
public class RoomTagController {

	@Autowired
	private RoomTagService roomTagService;
	
	@PostMapping
	public ResponseEntity<?> postRoomTag(@RequestBody RoomTagDTO body){
		RoomTag roomTag = new RoomTag(body);
		this.roomTagService.save(roomTag);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping
	public ResponseEntity<List<RoomTag>> getAllRoomTags() {
		List<RoomTag> roomTagList = this.roomTagService.findAll();
		return ResponseEntity.ok(roomTagList);
	}
}
