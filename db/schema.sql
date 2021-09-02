DROP DATABASE IF EXISTS roster_db;

CREATE DATABASE roster_db;
USE roster_db;

CREATE TABLE Rosters(
	id INTEGER NOT NULL PRIMARY KEY, 
    title VARCHAR(30) NOT NULL,
	pick1 INTEGER NOT NULL,
    pick2 INTEGER NOT NULL,
    pick3 INTEGER NOT NULL,
    pick4 INTEGER NOT NULL,
    pick5 INTEGER NOT NULL,
    weekPoints INTEGER NOT NULL,
    totalPoints INTEGER NOT NULL
);

INSERT INTO Rosters (id, title, pick1, pick2, pick3, pick4, pick5, weekPoints, totalPoints)
VALUES 
  (1, "Alex", 2005, 2006, 8, 252, 99, 0, 0 ),
  (2, "Bob", 2132, 41, 2199, 61, 2390, 0, 0),
  (3, "Jeff", 248, 66, 96, 309, 127, 0, 0);
  
CREATE TABLE User (
	id INTEGER NOT NULL PRIMARY KEY auto_increment, 
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
INSERT INTO User (username, email, password)
VALUES 
("Lernantino", "lernantino@gmail.com", "password1234");
