DROP DATABASE IF EXISTS roster_db;

CREATE DATABASE roster_db;
USE roster_db;

CREATE TABLE Rosters(
	title VARCHAR(30) NOT NULL PRIMARY KEY,
	pick1 INTEGER NOT NULL,
    pick2 INTEGER NOT NULL,
    pick3 INTEGER NOT NULL,
    pick4 INTEGER NOT NULL,
    pick5 INTEGER NOT NULL,
    weekPoints INTEGER NOT NULL,
    totalPoints INTEGER NOT NULL
);

INSERT INTO Rosters (title, pick1, pick2, pick3, pick4, pick5, weekPoints, totalPoints)
VALUES 
  ("Alex", 2005, 2006, 8, 252, 99, 0, 0 ),
  ("Bob", 2132, 41, 2199, 61, 2390, 0, 0 ),
  ("Jeff", 248, 66, 96, 309, 127, 0, 0 );
  
  
