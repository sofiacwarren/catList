-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
DROP DATABASE IF EXISTS cowsData;

CREATE DATABASE cowsData;

USE cowsData;
-- CREATE YOUR TABLES
CREATE TABLE IF NOT EXISTS cows (
  id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
  cow_name VARCHAR(20),
  cow_description VARCHAR(300)
);
-- ADD RECORDS TO YOUR TABLE

INSERT INTO cows (cow_name, cow_description) VALUES ('Buttercup', 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.');
INSERT INTO cows (cow_name, cow_description) VALUES ('Daisy', 'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.');
INSERT INTO cows (cow_name, cow_description) VALUES ('Milkshake', 'a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.');
INSERT INTO cows (cow_name, cow_description) VALUES ('Bessie', "a person's best or closest friend.");
INSERT INTO cows (cow_name, cow_description) VALUES ('MooDonna', 'archaic : lady -- used as a form of respectful address.');
INSERT INTO cows (cow_name, cow_description) VALUES ('MooLawn', 'a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.');