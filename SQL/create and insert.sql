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

INSERT INTO KnownErrors (title, id_status, id_added_by, id_category) VALUES ('Static Hosts Entries werden nicht korrekt gelöscht', 2, 1, 2);
INSERT INTO KnownErrors (title, id_status, id_added_by, id_category) VALUES ('MobileID PIN Aufforderung erscheint nicht bei Android 6.2', 1, 2, 1);
INSERT INTO KnownErrors (title, id_status, id_added_by, id_category) VALUES ('Verbindung zu test.hallo.com über Mobiles Netzwerk funktioniert nicht', 2, 3, 3);

INSERT INTO Worklogs (title, description, id_added_by, id_known_error) VALUES ('Eintrag verschwindet aus GUI, /etc/hosts File wird aber nicht angepasst', 'Wenn Eintrag für Static host aus GUI gelöscht wird, verschwindet der erfasste Static Host Eintrag aus dem GUI, das /etc/hosts File wird aber nicht angepasst. Namensauflösung wird weiterhin auf alten Eintrag aufgelöst. Ticket bei Hersteller eröffnet', 1, 2);
INSERT INTO Worklogs (title, description, id_added_by, id_known_error) VALUES ('Tastatur zur PIN Aufforderung erscheint nicht', 'Requests auf MobileID Backend sind alle in Ordnung, Eingabeaufforderung erscheint aber nicht', 2, 2);
