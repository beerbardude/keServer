# keServer

## Einleitung

Das keServer Projekt stellt die Server Seite für eine Known Error Datenbank dar.

Es können Fehler abgerufen und an den Client gesendet werden.

Daten die der Client zum Server sendet werden gespeichert.

Der keServer hat eine Datenbank Anbindung zu einer PostgreSQL Datenbank, in welcher alle erfassten Known Errors gespeichert werden.

Das dazugehörige Projekt für die Client Seite ist unter folgendem Link zu finden:

[Projekt keClient](https://github.com/ibwgr/keClient)

## Entwicklung

Als Grundlage für den Server wird Node.js mit der Express Library verwendet.
Als zusätzliche Library auf der Server Seite wird pg verwendet. Die pg Library ermöglich die Anbindung an die PostgreSQL Datebank.

[Express](http://expressjs.com)

[pg](https://www.npmjs.com/package/pg)

## Vorbereitung und Installation

Folgende Schritte müssen zur Vorbereitung und Installation durchgeführt werden.

### Erstellung der benötigten Datenbank

Um Daten zu erfassen und zu speichern wird eine PostgreSQL Datebank benötigt.
Der PostgreSQL Server muss erreichbar sein. Für die Verbindung wird der Standardport 5432 verwendet. Bei Bedarf kann das in der Konfiguration angepasst werden (NICHT GETESTET)

Folgende Schritte müssen auf dem PostgreSQL Server durchgeführt werden:

1. Erstellung einer Datenbank, DB Name: KnownErrors
2. Ausführung des Scripts Create.sql (Bestandteil des Projekts, abgelegt im Ordner SQL) [Link Create.sql](SQL/Create.sql)
3. Nach Ausführung der Create.sql sind alle benötigen Tables angelegt. Als letztes können nun Testdaten erfasst werden.
Dazu kann das Script insert.sql (Bestandteil des Projekts, abgelegt im Ordner SQL) ausgeführt werden. Dieses Script fügt Known Errors und Worklogs zu der Datenbank hinzu. [Link Insert.sql](SQL/Insert.sql)
4. Alternativ kann auch das Dump File ke_dump.sql importiert werden. [Link Dump File](SQL/ke_dump.sql)

### Installation

Auf dem System muss Node.js installiert sein, um das Projekt korrekt zu starten.
Die zusätzlich benötigten Libraries sind Bestandteil des node_modules Folder, weshalb keine zusätzlichen Pakete installiert werden müssen.

Sollten dabei Probleme auftreten, können die Pakete ebenfalls manuell installiert werden:
```
npm install express

npm install pg

npm install cors

npm install body-parser
```

### Anpassung der Datenbank Verbindung (optional)

Die Daten für den Verbindungsaufbau zur Datenbank sind im File **config.js** definiert. Die Default Einstellung verwenden die folgenden Parameter:

- user: 'postgres'
- password: 'postgres'
- host: 'localhost'
- port: 5432
- database: 'KnownErrors'

Wenn der PostgreSQL Server nicht auf dem localhost ausgeführt wird, ein anderer Benutzer, ein anderes Passwort oder ein alternativer Port verwendet wird, können diese Angaben hier angepasst werden.
Falls ebenfalls ein alternativer Name für die Datenbank verwendet wird, muss das ebenfalls hier angepasst werden.

## Starten des Servers

Sind die Vorbereitungen und Installationen abgeschlossen, kann der Server gestartet werden.
Im package.json File wurd ein start Script erstellt.

Der Start des Server wird über den Befehl `npm start`ausgelöst. Der Express WebServer verwendet den Port 3000

### Überprüfung ob Server korrekt läuft

Um zu testen ob der Server korrekt läuft, kann im Browser die folgende URL aufgerufen werden:

http://localhost:3000

Als Resultat sollte man im Browser ein die erfassten Fehler in der Datenbank sehen. Das Resultat wird im JSON Format dargestellt.

## Autoren
- Alex Zaeper
- Armin Beiner

## Lizenz

MIT License

Copyright (c) 2017 Alex Zaper, Armin Beiner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
