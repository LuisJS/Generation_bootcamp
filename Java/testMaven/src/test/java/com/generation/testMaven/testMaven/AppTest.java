package com.generation.testMaven.testMaven;

import org.junit.jupiter.api.*;

public class AppTest 
{
	@Test
	public void saludoTest() {
		App saludo = new App();
		Assertions.assertEquals("Hola mundo", saludo.saludo());
	}
	
	@Test
	public void saludoStaticTest() {
		Assertions.assertEquals("Hola mundo", App.saludoStaticTest());
	}
	
}
