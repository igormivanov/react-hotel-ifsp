package br.com.hotelifsp.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.hotelifsp.entities.RoomTag;

@Repository
public interface RoomTagRepository extends JpaRepository<RoomTag, Long>{
	
}
