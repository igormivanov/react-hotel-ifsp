package br.com.hotelifsp.dtos;

import br.com.hotelifsp.enums.Role;

public class UserDTO{
	
	private Long id;
	private String fullName;
	private String cpf;
	private String email;
	private String adress;
	private String phone;
    private Role role;
	
	public UserDTO(Long id, String fullName, String cpf, String email, String adress, String phone, Role role
			) {
		this.id = id;
		this.fullName = fullName;
		this.cpf = cpf;
		this.email = email;
		this.adress = adress;
		this.phone = phone;
		this.role = role;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
}
