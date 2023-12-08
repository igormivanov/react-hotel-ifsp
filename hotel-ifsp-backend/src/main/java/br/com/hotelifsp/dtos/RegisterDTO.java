package br.com.hotelifsp.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public record RegisterDTO(
		@JsonProperty("fullName") String fullName,
	    @JsonProperty("cpf") String cpf,
	    @JsonProperty("email") String email,
	    @JsonProperty("password") String password
		) {

}
