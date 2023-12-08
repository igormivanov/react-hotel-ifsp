package br.com.hotelifsp.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.hotelifsp.dtos.AuthenticationDTO;
import br.com.hotelifsp.dtos.LoginResponseDTO;
import br.com.hotelifsp.dtos.RegisterDTO;
import br.com.hotelifsp.dtos.UserDTO;
import br.com.hotelifsp.dtos.ValidateTokenDTO;
import br.com.hotelifsp.entities.Booking;
import br.com.hotelifsp.entities.User;
import br.com.hotelifsp.enums.Role;
import br.com.hotelifsp.services.TokenService;
import br.com.hotelifsp.services.UserService;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private TokenService tokenService;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationDTO authenticationDTO){
		 var usernamePassword = new UsernamePasswordAuthenticationToken(authenticationDTO.email(), authenticationDTO.password());
		 var auth = this.authenticationManager.authenticate(usernamePassword);
		 var token = tokenService.generateToken((User) auth.getPrincipal());
		 User user = userService.findByEmail(authenticationDTO.email());
		 UserDTO userDTO = userService.createUserDTO(user);
		 return ResponseEntity.ok(new LoginResponseDTO(userDTO, token));
		 
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody RegisterDTO registerDTO){
		 if(this.userService.findByEmail(registerDTO.email()) != null) return ResponseEntity.badRequest().build();
		 String encryptedPassword = new BCryptPasswordEncoder().encode(registerDTO.password());
		 User user = new User();
		 user.setAdress(null);
		 user.setPhone(null);
		 user.setCpf(registerDTO.cpf());
		 user.setRole(Role.USER);
		 user.setEmail(registerDTO.email());
		 user.setPassword(encryptedPassword);
		 user.setFullName(registerDTO.fullName());
		 this.userService.saveUser(user);
		 return ResponseEntity.ok().build();
		 
	}
	
	@PostMapping("/validate-token")
	public ResponseEntity<?> validadeToken(@RequestBody ValidateTokenDTO token){
		var email = tokenService.validateToken(token.token());
		
		if (email == null) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token inválido");
	    }

	    User user = userService.findByEmail(email);
	    if (user == null) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado para o email fornecido");
	    }
		
		
		UserDTO userDTO = userService.createUserDTO(user);
		return ResponseEntity.ok(userDTO);
		
	}
}
