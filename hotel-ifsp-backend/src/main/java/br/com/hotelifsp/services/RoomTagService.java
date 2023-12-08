package br.com.hotelifsp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.hotelifsp.entities.RoomTag;
import br.com.hotelifsp.repositories.RoomTagRepository;

@Service
public class RoomTagService {

	@Autowired
	private RoomTagRepository roomTagRepository;
	
	public void save(RoomTag roomTag){
		roomTagRepository.save(roomTag);
	}
	
	public List<RoomTag> findAll(){
		return roomTagRepository.findAll();
	}
}
