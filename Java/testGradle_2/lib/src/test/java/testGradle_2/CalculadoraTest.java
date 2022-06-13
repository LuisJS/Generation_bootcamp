package testGradle_2;

import org.junit.Test;
import org.junit.jupiter.api.*;

public class CalculadoraTest {
	
	@Test
	public void sumaTest() {
		Calculadora sumaCalc = new Calculadora();
		Assertions.assertEquals(2, sumaCalc.sumar(1, 1));
 	}

}
