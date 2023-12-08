package br.com.hotelifsp.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.hotelifsp.dtos.UserDTO;
import br.com.hotelifsp.entities.User;
import br.com.hotelifsp.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public void saveUser(User user) {
		userRepository.save(user);
	}
	
	public Optional<User> findById(Long id) {
		return userRepository.findById(id);
	}
	
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	
	public UserDTO createUserDTO(User user) {
		UserDTO userDTO = new UserDTO(
				user.getId(),
				user.getFullName(),
				user.getCpf(),
				user.getEmail(),
				user.getAdress(),
				user.getPhone(),
				user.getRole()
				);
		return userDTO;
	}
}

