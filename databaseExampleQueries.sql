-- Create a exhibit table

--This file is only my notes, changing
--this file doesn't change anything in
--the database

CREATE TABLE exhibits(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  price varchar(6) NOT NULL,
  img varchar(50),
  alt varchar(50)
);

-- insert exhibits
INSERT INTO exhibits (name, type, price, img, alt)
VALUES
('Exhibit-1', 'Pokemon', 'price', 'img', 'alt'),
('Exhibit-1', 'Pokemon', 'price', 'img', 'alt'),
('Exhibit-3', 'Pokemon', 'price', 'img', 'alt'),
('Exhibit-4', 'Pokemon', 'price', 'img', 'alt');

-- read exhibits
SELECT * FROM exhibits;
