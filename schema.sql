DROP DATABASE IF EXISTS fullstackdrill;

CREATE DATABASE fullstackdrill;

USE fullstackdrill;

CREATE TABLE IF NOT EXISTS employees (
  id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
  first_name varchar(255),
  last_name varchar(255),
  city varchar(255)
);

 

INSERT INTO employees (first_name, last_name, city) VALUES ("Suman", "Rush", "Menlo Park");
INSERT INTO employees (first_name, last_name, city) VALUES ("Marco", "Cooke", "Valdez");
INSERT INTO employees (first_name, last_name, city) VALUES ("Anabelle", "Howell", "Vallejo");
INSERT INTO employees (first_name, last_name, city) VALUES ("Alistair", "Grey", "Estes Park");
INSERT INTO employees (first_name, last_name, city) VALUES ("Bayley", "Brennan","Fredericksburg");
INSERT INTO employees (first_name, last_name, city) VALUES ("Shakira", "Harrington", "Grand Island");
INSERT INTO employees (first_name, last_name, city) VALUES ("Jayson", "Schaefer", "Reno");
INSERT INTO employees (first_name, last_name, city) VALUES ("Shaurya", "Pugh", "Lafayette");
INSERT INTO employees (first_name, last_name, city) VALUES ("Mikolaj", "Christian", "Glendive");
INSERT INTO employees (first_name, last_name, city) VALUES ("Lily", "Taylor", "Lubbock");
INSERT INTO employees (first_name, last_name, city) VALUES ("Henley", "Almond", "Lake Placid");
INSERT INTO employees (first_name, last_name, city) VALUES ("Pharrell", "Cohen", "Woodbridge");
INSERT INTO employees (first_name, last_name, city) VALUES ("Amina", "Andrade", "Lock Haven");
INSERT INTO employees (first_name, last_name, city) VALUES ("Alan", "Davey", "Orange");
INSERT INTO employees (first_name, last_name, city) VALUES ("Jaeden", "West", "Hays");