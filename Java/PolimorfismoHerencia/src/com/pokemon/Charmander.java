package com.pokemon;

public class Charmander extends Pokemon implements TipoVolador, TipoFuego {
	
	public Charmander(int id, int edad, int nivel, String nombre, boolean evolucion) {
		super(id, edad, nivel, nombre,  evolucion);
	}
	
	@Override
	public void lanzarLlamas() {
		System.out.println("Lanzando llamas");
	}
	
	@Override
	public void araniar() {
		System.out.println("Arañando");
	}
	
	@Override
	public void volar() {
		System.out.println("Volando");
	}
}
