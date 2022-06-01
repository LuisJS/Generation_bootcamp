USE sakila;

SELECT * FROM payment;

-- COUNT() contar los elementos o las celdas de una columna
-- AS nos permite darle un alias o un nombre temporal a la columna
SELECT count(*) AS cantidad_filas FROM payment;

SELECT count(*) AS cantidad_filas FROM payment WHERE staff_id = 2;

SELECT count(DISTINCT customer_id) FROM payment;

SELECT count(DISTINCT customer_id) FROM payment;

-- Contar filas de la tabla world.country
SELECT count(*) FROM world.country;

-- SUM() realiza una suma de los valores de una columna
SELECT sum(amount) as total from  payment;
-- ¿Cual es el cliente que gastó más?
SELECT count(*) FROM payment GROUP BY customer_id;

SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total DESC;

-- GROUP BY
-- Normalmente se usa en conjunto con COUNT(), AVG, SUM()
SELECT customer_ID, amount FROM payment GROUP BY customer_id;

-- AVG() nos permite obtener un promedio de cantidades en una columna
SELECT AVG(amount) as Promedio FROM payment WHERE customer_id = 248;
