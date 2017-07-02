# keServer

## Einleitung

Das keServer Projekt stellt die Server Seite für eine Known Error Datenbank dar.

Es können Fehler abgerufen und an den Client gesendet werden.

Daten die der Client zum Server sendet werden gespeichert.

Der keServer hat eine Datenbank Anbindung zu einer PostgreSQL Datenbank, in welcher alle erfassten Known Errors gespeichert werden.

Das dazugehörige Projekt für die Client Seite ist unter folgendem Link zu finden:

[Projekt keClient](https://github.com/ibwgr/keClient)

## Entwicklung

Als Grundlage für den Server wird die Express Library verwendet.
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


