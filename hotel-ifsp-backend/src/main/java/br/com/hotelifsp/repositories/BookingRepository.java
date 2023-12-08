package br.com.hotelifsp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.hotelifsp.entities.Booking;
import br.com.hotelifsp.entities.User;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long>{

	List<Booking> findByUser(User user);
}
