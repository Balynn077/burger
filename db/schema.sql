DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
 id INT PRIMARY KEY auto_increment,
    burger_name VARCHAR(30) NOT NULL,
    devoured boolean,
    burger_time TIMESTAMP,
  	
  	PRIMARY KEY(id)
);

  

  