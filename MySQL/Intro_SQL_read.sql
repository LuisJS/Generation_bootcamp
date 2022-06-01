-- Leer

-- Muestra las bases de datos que tenemos
SHOW DATABASES;
USE sakila;

-- Leer los datos de una tabla
SELECT * FROM actor;
SELECT * FROM city;
SELECT * FROM sakila;

-- Leer partes de una tabla
SELECT city_id, city_id FROM city;

-- Limitar la cantidad de datos
SELECT * FROM actor LIMIT 10;

-- Ordenar los datos dependiendo de una columna 
SELECT * FROM city ORDER by city ASC;

-- Ordenar los datos dependiendo de una columna de forma descendente
SELECT * FROM city ORDER by country_id DESC;

/*
Operadores de comparación
	Igual = 
    Distinto !=
    Mayor >
    Menor <
    ComoLIKE
    No como NOT LIKE
*/

SELECT * FROM city WHERE city = "Cuman";
SELECT * FROM actor WHERE first_name = 'Penelope';

SELECT * FROM actor WHERE first_name != 'Penelope';

SELECT * FROM actor WHERE actor_id > 50;

SELECT * FROM actor WHERE actor_id < 50;

SELECT * FROM actor WHERE actor_id >= 50;

SELECT * FROM actor WHERE actor_id <= 50;

SELECT * FROM actor WHERE actor_id > 50;

-- Se utiliza para realizar búsquedas 
-- Selecciona de la tabla todas las personas que terminen su primer nombre con ope 
SELECT * FROM actor WHERE first_name LIKE '%an';

-- Seleccionar de la tabla todas las personas cuyo first name empiece con 'an'
SELECT * FROM actor WHERE first_name LIKE 'an%';

-- Seleccionar de la tabla todas las personas cuyo first name tengan una 'n'
SELECT * FROM actor WHERE first_name LIKE '%n%';

-- Seleccionar de la tabla un patrón 
SELECT * FROM actor WHERE first_name LIKE '%k_r%';
SELECT * FROM actor WHERE first_name LIKE '%a__e%';

-- NOT LIKE
Select * from actor where first_name not like "%a__e%";

-- Uniendo todo 
SELECT * FROM actor WHERE first_name LIKE '%nn%' ORDER BY last_name ASC LIMIT 5;

/*
Operadores lógicos 
	OR Basta con que cumpla una de ellas 
    AND Debe cumplir las mismas condiciones entonces 
*/

Select * from actor where actor_id >50 and first_name LIKE "%n%";
Select * from actor where first_name LIKE "%n%" or first_name like "%m%";
