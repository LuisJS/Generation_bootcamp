USE world;
SELECT 5 + 5;
SELECT * FROM country;
SELECT `Name` FROM country;
SELECT `Name`, population FROM country order by population asc;
SELECT * FROM country WHERE `Name` = 'Mexico';
SELECT * FROM country WHERE population > 50000000 AND population < 70000000 ORDER BY population;
-- Operador Between
SELECT * FROM country WHERE population NOT BETWEEN 50000000 AND 70000000 ORDER BY population;
SELECT * FROM country WHERE continent= 'Asia' OR continent = 'North America' or continent = 'Ocenania';
SELECT * FROM country WHERE continent In ('Asia');
SELECT * FROM country WHERE continent In ('Asia', 'North America');
SELECT `code`, `name`, region, continent, surfacearea, LifeExpectancy, GNP FROM country WHERE continent IN ('North America', 'Asia', 'Oceania') OR region IN ('Caribean', 'Central America') ORDER BY GNP ASC;
-- Like busca un patrón específico
-- '_' especifica un solo caracter
-- '%' busca cualquier cantidad de caracteres
SELECT * FROM country WHERE `name` LIKE '_and';
SELECT * FROM country WHERE `name` LIKE '%_and';
SELECT * FROM country WHERE `name` LIKE '%e__a';
SELECT DISTINCT Continent FROM country;
