package com.generation.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Saludo {
	//Peticiones web
	//GET, POST, DELETE, PUT
	// Petición para pedir información
	@GetMapping("/saludo")
	public String saludo() {
		return "Hola a todos";
	}
	@GetMapping("/holaspring")
	public String HolaSpring() {
		return "Hola mundo desde Spring";
	}
	// Petición para guardar información
	@PostMapping("/login")
	public String login() {
		return "Te registraste";
	}
}
