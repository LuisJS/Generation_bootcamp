-- Leer
-- Muestra las bases de datos que tenemos
SHOW DATABASES;
USE sakila;
-- Leer los datos de una tabla
SELECT * FROM actor;
SELECT * FROM city;
-- Leer partes de una tabla
SELECT city_id, city_id FROM city;