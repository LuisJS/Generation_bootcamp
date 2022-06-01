USE tienda;

-- JOINS nos permiten combinar datos de distintas tablas

-- Inner Join
-- Solamente nos trae las filas donde hay valores válidos
-- Omite las filas donde hay null
SELECT
categoria.nombre as categoria,
producto.nombre as producto
FROM producto
INNER JOIN categoria ON categoria.idCategoria = producto.idCategoria;

