package com.generation.testMaven.testMaven;

import org.junit.jupiter.api.Assertions;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
    }
    
    public String saludo() {
    	return "Hola mundo";
    }
    
    public static String saludoStaticTest() {
		return "Hola mundo";
	}
}
