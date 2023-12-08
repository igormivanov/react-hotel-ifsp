package br.com.hotelifsp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.hotelifsp.entities.GuestDetails;

@Repository
public interface GuestDetailsRepository extends JpaRepository<GuestDetails, Long>{

}
