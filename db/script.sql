CREATE DATABASE IF NOT EXISTS premierleague;

use premierleague;

CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  nationality VARCHAR(255),
  position VARCHAR(255),
  image VARCHAR(255)
);

  INSERT INTO players VALUES(1,'kevin de bruine','Belgium','midfield','https://www.mancity.com/meta/media/4jeo4c53/kevin-de-bruyne.png')