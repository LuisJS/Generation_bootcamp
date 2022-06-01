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
    estado VARCHAR(255) DEFAULT 'Desconocido', -- NOT NULL, -- estado VARCHAR(255) DEFAULT "Desconocido".
    cumpleanios DATE, -- COLOCAR VALOR POR DEFAULT NULL o DEFAULT NULL.
    PRIMARY KEY (persona_id),
    CONSTRAINT correo_unico UNIQUE(correo) -- Para agregar valores unicos se usa la palabra "UNIQUE"
);

INSERT INTO persona(nombre, correo, edad, estado, cumpleanios) values ('Luis', 'luis@gmail.com', 30, 'Feliz', '1991-06-30'),
('Alberto', 'alberto@gmail.com', 31, 'Emocionado', '1991-06-30');

-- Error 1062 Dato repetido
INSERT INTO persona(nombre, correo, edad, estado, cumpleanios) values ('Luis', 'luis@gmail.com', 30, 'Feliz', '1991-06-30'),
('Pepe', 'alberto@gmail.com', 34, 'Emocionado', '1990-06-30');

-- Error 1364 No llenar un dato NOT NULL
INSERT INTO persona(correo, edad, estado, cumpleanios) values ('pepe@gmail.com', 24, 'alegre', '1980-06-30');

-- Ingresar datos que no son necesarios (No tiene cumpleaños)
INSERT INTO persona(nombre, correo, edad, estado) values ('Pepe', 'pepe@gmail.com', 34, 'Alegre');

-- Ingresar datos con valor por defecto (No tiene estado)
INSERT INTO persona(nombre, correo, edad, cumpleanios) values ('Toño', 'ton@gmail.com', 40, '1970-05-02');

SELECT * FROM persona;

CREATE TABLE mascota (
	mascota_id int AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    edad int NOT NULL,
    fk1_persona int NOT NULL,
    PRIMARY KEY (mascota_id),
    FOREIGN KEY (fk1_persona) REFERENCES persona (persona_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

SELECT * FROM mascotita;
SELECT * FROM persona;

INSERT INTO mascota(nombre, edad, fk1_persona) values ('Leo', 3, 1);
INSERT INTO mascota(nombre, edad, fk1_persona) values ('Tobi', 9, 1);
INSERT INTO mascotita(nombre, edadP, fk1_persona) values ('Beni', 12, 2);
INSERT INTO mascotita(nombre, edadP, fk1_persona) values ('Patitas', 4, 5);
