package com.pokemon;

public class Chikorita extends TipoPlanta {
	
	int numeroCuernitos;

	public Chikorita(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas, int numeroCuernitos) {
		super(id, edad, nivel, nombre, evolucion, numeroHojas);
		this.numeroCuernitos = numeroCuernitos;
	}
	
	public void golpear() {
		System.out.println(getNombre() + " está golpeando");
	}

	public int getNumeroCuernitos() {
		return numeroCuernitos;
	}

	public void setNumeroCuernitos(int numeroCuernitos) {
		this.numeroCuernitos = numeroCuernitos;
	}

	@Override
	public String toString() {
		return "Chikorita [numeroCuernitos=" + numeroCuernitos + "]";
	}
	
	
}
