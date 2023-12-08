package br.com.hotelifsp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.hotelifsp.entities.RoomType;
import br.com.hotelifsp.repositories.RoomTypeRepository;

@Service
public class RoomTypeService {
	
	@Autowired
	private RoomTypeRepository roomTypeRepository;
	
	public List<RoomType> findAll() {
		return roomTypeRepository.findAll();
	}
	
	public void save(RoomType roomType) {
		roomTypeRepository.save(roomType);
	}
	
	public Optional<RoomType> findById(Long id) {
		return roomTypeRepository.findById(id);
	}
}
