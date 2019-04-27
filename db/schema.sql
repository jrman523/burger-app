CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS g5uu2rd2dudlezoo.burgers;
CREATE TABLE g5uu2rd2dudlezoo.burgers(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(50),
createdAt TIMESTAMP not null,
devoured BOOLEAN,
date TIMESTAMP);