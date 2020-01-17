DROP TABLE IF EXISTS users,usersServices
CREATE TABLE users (
 UserId INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(45),
  lastName VARCHAR(45),
gender VARCHAR(45),
health VARCHAR(45),
  PRIMARY KEY (id)
);

CREATE TABLE usersServices (
usersServices id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  ngo VARCHAR(45),
  service VARCHAR(45),
  date VARCHAR(45),
  PRIMARY KEY (id),
  FOREIGN KEY (userId)
  REFERENCES users (id)
);
INSERT INTO users
	(firstName, lastName, gender, health)
VALUES
(1,"Youlanda","Schemmer","male","healthy"),
  (2,"Dyan","Oldroyd","female","healthy"),
  (3,"Roxane","Campain","female","medical need"),
  (4,"Lavera","Perin","male","medical need"),
  (5,"Erick","Ferencz","male","healthy"),
  (6,"Fatima","Saylors","female","healthy"),
  (7,"Jina","Briddick","female","healthy"),
  (8,"Emerson","Bowley","female","medical need"),
  (9,"Blair","Malet","male","healthy"),
  (10,"Brock","Bolognia","male","healthy");

INSERT INTO usersServices
	(,userId, ngo, service, date)
VALUES
(1101, 2"COR","Shelter","05/11/2010"),
  (1102, 3"KIR","food","11/13/2017"),
  (1103, 1"JOS","$100(medical)","10/09/2016"),
  (1104, 8"LAI","shelter","04/25/2019"),
  (1105, 4"NOR","shelter","12/25/2019"),
  (1106,7"LEV","finding job","15/8/2004"),
  (1107,10"BAR","education","03/14/2016"),
  (1108, 9"LEV","finding job","05/18/2000"),
  (1109,6" KIR","food","11/23/2011 "),
  (11010,5" LAI","shelter","04/05/2016");
