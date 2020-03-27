DROP DATABASE IF EXISTS fullstackdrill;

CREATE DATABASE fullstackdrill;


CREATE TABLE IF NOT EXISTS employees (id integer AUTO_INCREMENT UNIQUE PRIMARY KEY, first_name varchar(255),last_name varchar(255),city varchar(255));

