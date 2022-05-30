CREATE DATABASE generation_bootcamp;
Use generation_bootcamp;
CREATE TABLE cohorte12 (cohorte12_id int NOT NULL auto_increment, alumnos_id int NOT NULL, PRIMARY KEY(cohorte12_id));
-- Este es un comentario
/*
Comentarios de más de una línea
*/
ALTER TABLE `generation_bootcamp`.`cohorte12` 
ADD COLUMN `instructor` INT NOT NULL AFTER `alumnos_id`,
ADD COLUMN `numero_alumnos` INT NOT NULL AFTER `instructor`,
ADD COLUMN `horario` CHAR(10) NOT NULL AFTER `numero_alumnos`,
ADD COLUMN `tipo_sesiones` VARCHAR(255) NOT NULL AFTER `horario`,
ADD COLUMN `ciudad` VARCHAR(255) NOT NULL AFTER `tipo_sesiones`;