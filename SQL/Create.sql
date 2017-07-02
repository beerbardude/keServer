DROP TABLE IF EXISTS KnownErrors, Worklogs, Added_by, Status, Category;

CREATE TABLE KnownErrors (
id SERIAL PRIMARY KEY,
title VARCHAR(200) NOT NULL UNIQUE,
id_status int NOT NULL,
id_added_by int NOT NULL,
created_at date NOT NULL DEFAULT CURRENT_DATE,
id_category int NOT NULL
);

CREATE TABLE Worklogs (
id SERIAL PRIMARY KEY,
title VARCHAR(200) NOT NULL,
description VARCHAR NOT NULL,
id_added_by int NOT NULL,
id_known_error int NOT NULL,
kb_link VARCHAR
);

CREATE TABLE Added_by (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL
);

CREATE TABLE Status(
id SERIAL PRIMARY KEY,
status VARCHAR NOT NULL
);

CREATE TABLE Category (
id SERIAL PRIMARY KEY,
category VARCHAR NOT NULL
);

ALTER TABLE KnownErrors ADD FOREIGN KEY (id_status) REFERENCES Status(id);
ALTER TABLE KnownErrors ADD FOREIGN KEY (id_added_by) REFERENCES Added_by(id);
ALTER TABLE KnownErrors ADD FOREIGN KEY (id_category) REFERENCES Category(id);

ALTER TABLE Worklogs ADD FOREIGN KEY (id_known_error) REFERENCES KnownErrors(id);
ALTER TABLE Worklogs ADD FOREIGN KEY (id_added_by) REFERENCES Added_by(id);


INSERT INTO Category (category) VALUES ('Mobile ID');
INSERT INTO Category (category) VALUES ('MobileIron');
INSERT INTO Category (category) VALUES ('Mobile Network');
INSERT INTO Category (category) VALUES ('MobileIron Cloud');
INSERT INTO Category (category) VALUES ('Blackberry');
INSERT INTO Category (category) VALUES ('iOS');
INSERT INTO Category (category) VALUES ('Android');
INSERT INTO Category (category) VALUES ('General');

INSERT INTO Added_by (name) VALUES ('Armin Beiner');
INSERT INTO Added_by (name) VALUES ('Alex Zaeper');
INSERT INTO Added_by (name) VALUES ('Ueli Kunz');
INSERT INTO Added_by (name) VALUES ('Conradin Candrian');

INSERT INTO Status (status) VALUES ('Open');
INSERT INTO Status (status) VALUES ('Pending');
INSERT INTO Status (status) VALUES ('Waiting for Release');
INSERT INTO Status (status) VALUES ('Resolved');