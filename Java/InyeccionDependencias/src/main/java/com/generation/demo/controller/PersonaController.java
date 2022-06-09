package com.generation.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.service.PersonaServiceImpl;

@RestController
@RequestMapping("/api")
public class PersonaController {
	
	private PersonaServiceImpl personaServiceImpl;
	
	@Autowired
	public PersonaController(PersonaServiceImpl personaServiceImpl) {
		this.personaServiceImpl = personaServiceImpl;
	}
	
	@GetMapping("/saludo")
	public String saludo() {
		return "Hola";
	}
	
	@GetMapping("/registro") //http://localhost/api/registro
	public String registro( @RequestParam(value = "nombre", defaultValue = "Desconocido") String nombre) {
		//personaServiceImpl = new PersonaServiceImpl();
		return personaServiceImpl.registro(nombre);
	}
}
