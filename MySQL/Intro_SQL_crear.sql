-- Crear


-- Crear bases de datos
CREATE DATABASE familia;
CREATE SCHEMA familia;

-- Seleccionar la base de datos
USE familia;

-- Crear tabla de personas
CREATE TABLE persona ( -- Es necesario poner una columna
	persona_id int AUTO_INCREMENT NOT NULL, -- No es necesario poner "NOT NULL" en llave primaria
    nombre VARCHAR(255) NOT NULL, -- Por defecto el valor agregado es "NULL"
	correo VARCHAR(255) NOT NULL,
    edad int NOT NULL,
    estado VARCHAR(255) NOT NULL, -- estado VARCHAR(255) DEFAULT "Desconocido",
    cumpleanios DATE NOT NULL,
    PRIMARY KEY (persona_id),
    CONSTRAINT correo_unico UNIQUE(correo) -- Para agregar valores unicos se usa la palabra "UNIQUE"
);
