-- ACTUALIZAR

-- Agregar una columna
ALTER TABLE mascota ADD COLUMN especie VARCHAR(255) NOT NULL;

-- Agregar una columna en una posicion especifica
ALTER TABLE mascota ADD COLUMN cumpleanios DATE AFTER edad;

-- Modificar las caracteristicas de una columna
-- ALTER TABLE mascota MODIFY cumpleanios VARCHAR(255) NOT NULL;
ALTER TABLE mascota MODIFY edad int;
ALTER TABLE mascotita MODIFY especie VARCHAR(255);

-- No podemos cambiar el nombre de una columna 
Alter table mascota Change column edad edadP int NOT NULL; 

-- Cambiar el nombre a una tabla 
Alter table Mascota rename Mascotita; 

-- Actualizar datos de una fila 
-- Error 
update mascotita set especie = "gato" where nombre = "Leo";

update mascotita set especie = "gato" where mascota_id = 1;

--
update mascotita set especie = "perro", edadP = 10 where mascota_id = 2;
update persona set persona_id = 3 where persona_id = 5;
update persona set persona_id = 4 where persona_id = 6;
Select * FROM mascotita;
SELECT * FROM mascota;
SELECT * FROM persona;