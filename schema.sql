-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
DROP DATABASE IF EXISTS catData;

CREATE DATABASE catData;

USE catData;

-- CREATE YOUR TABLES
CREATE TABLE IF NOT EXISTS cat (
  id integer AUTO_INCREMENT UNIQUE,
  cat_name VARCHAR(20) NOT NULL,
  cat_description VARCHAR(300),
  PRIMARY KEY (id)
);
-- ADD RECORDS TO YOUR TABLE

INSERT INTO cat (cat_name, cat_description) VALUES ('Buttercup', 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.');
INSERT INTO cat (cat_name, cat_description) VALUES ('Daisy', 'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.');
INSERT INTO cat (cat_name, cat_description) VALUES ('Milkshake', 'a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.');
INSERT INTO cat (cat_name, cat_description) VALUES ('Purry Maniloe', "a person's best or closest friend.");
INSERT INTO cat (cat_name, cat_description) VALUES ('Donna', 'archaic : lady -- used as a form of respectful address.');
INSERT INTO cat (cat_name, cat_description) VALUES ('Meowlan', 'a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.');