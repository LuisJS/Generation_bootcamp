Use sakila;
-- Mostrar las direcciones de cada país
/*
address - address / city_id
city - city_id /city / country_id
country - country  / country_id 
*/

SELECT
country.country_id AS clave_de_Pais,
country.country AS Pais,
city.city_id AS clave_de_ciudad,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON city.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id;

-- LEFT JOIN
-- Siempre devuelve las filas de la primer tabla aunque la condición no se cumpla 
USE TIENDA;
SELECT
cliente.nombre AS nombre,
factura.idFactura
FROM cliente
LEFT JOIN factura ON cliente.idCliente = factura.idCliente
ORDER BY nombre;

-- RIGHT JOIN
USE TIENDA;
SELECT
cliente.nombre AS nombre,
factura.idFactura
FROM cliente
RIGHT JOIN factura ON cliente.idCliente = factura.idCliente
ORDER BY idFactura;