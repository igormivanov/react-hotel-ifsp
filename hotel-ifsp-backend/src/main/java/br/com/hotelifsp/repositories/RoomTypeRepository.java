package br.com.hotelifsp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.hotelifsp.entities.RoomType;

@Repository
public interface RoomTypeRepository extends JpaRepository<RoomType, Long>{

}
