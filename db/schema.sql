-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgersDB;
USE burgersDB;

-- Create the table burgers.
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burgerName varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT FALSE NOT NULL,
PRIMARY KEY (id)
);
