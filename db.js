/** data base operations
 * Created by Armin on 10.06.2017.
 */
'use strict'
/*Initialisierung der DB Verbindung mittels pg library.
 Definition als Pool für Verbindung von mehreren Clients gleichzeitig.
 */
let pool = require('./config')

export default class DB {
    /*
    Funktion für das Laden aller Fehler aus der Datenbank für die Initiale Ansicht aller erfassten Fehler
     */
    getErrors(response){

          pool.on('error', function (e, client) {
            console.log(e)
        });

        /*
        SQL Query für die Abfrage der erfassten Fehler
         */
        pool.query('SELECT ke.id as keId, ke.title, stat.status, stat.id as statId, addby.name, addby.id as addbyId, cat.category , cat.id as catId FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id)', function (err, result) {
            response.json(result.rows);
        });
    }

    /*
    Funktion um alle Worklog Einträge für einen spezifischen Known Error aus der DB abzufragen.
    Als Parameter wird die Known Error ID übergeben
     */
    getWorklogs(id, response){

        pool.on('error', function (e, client){
            console.log(e)
        })

        /*
        SQL Abfrage um alle Worklog Einträge für einen Known Error auszulesen. Für die WHERE Bedingung wird die Known Error ID verwendet
         */
       pool.query('SELECT wl.id, wl.title, wl.description, addby.name FROM Worklogs wl JOIN Added_by addby ON (wl.id_added_by = addby.id) WHERE id_known_error = ' + id+';', function (err, result) {
            response.json(result.rows);
        } )

    }

    /*
    Funktion um alle definierten Status aus der DB zu laden
     */
    getStatus (response){
        pool.on('error', function (e, client){
            console.log(e)
        })

        pool.query('SELECT * from Status;', function (err, result) {
            response.json(result.rows);
        })

    }

    /*
    Funktion um alle erfassten Kategorien aus der DB zu laden
     */
    getCategories (response ){
        pool.on('error', function (e, client){
            console.log(e)
        })

        pool.query('SELECT * from Category;', function (err, result) {
            response.json(result.rows);
        })
    }

    /*
    Funktion um die Namen der Mitarbeiter aus der DB zu laden
     */
    getNames (response) {
        pool.on('error', function (e, client){
            console.log(e)
        })

        pool.query('SELECT * from Added_by;', function (err, result) {
            response.json(result.rows);
        })
    }

    /*
    Funktion um einen neuen Error hinzuzufügen.
     */
    addErrors(title, id_status, id_added_by, id_category){

        pool.on('error', function (e, client){
            console.log(e)
        })

        /*
        SQL Query für INSERT. Die angegeben Variablen werden dem Query als Parameter übergeben
         */
        pool.query('INSERT into KnownErrors(title, id_status, id_added_by, id_category) VALUES ($1, $2, $3, $4);',
        [title, id_status, id_added_by, id_category])
        //console.log('INSERT into KnownErrors(title, id_status, id_added_by, id_category) VALUES ($1, $2, $3, $4)')
    }

    /*
    Funktion um einen neuen Worklog bei einem spezifischen Known Error hinzuzufügen
     */
    addWorklogs(title, description, id_added_by, id_known_error){
        pool.on('error', function (e, client) {
            console.log("ERROR"+e)
        })

        /*
        SQL Query für INSERT eines Worklogs. Die angegeben Variablen werden auch hier dem Query als Parameter übergeben
         */
        pool.query('INSERT into Worklogs(title, description, id_added_by, id_known_error) VALUES ($1, $2, $3, $4);',
        [title, description, id_added_by, id_known_error]
        )
    }

    /*
    Funktion für die Suchabfrage. Sucht durch alle erfassten Knwon Error Title, Worklog Title und Worklog Description.
     */
    searchErrorsAndWorklogs(text, response){
        pool.on('error', function (e, client){
            console.log(e)
        })

        /*
        SQL Query für die Suchabfrage. Übernimmt Text aus Suchfeld und gleicht diese mit Titel von Known Errors / Worklogs und den Descriptions aus Worklogs ab.
        ILIKE Abfrage mit % vor und nach Suchterm, ignoriert Gross-/Kleinschreibung.
         */
        pool.query('SELECT ke.id as keId, ke.title, stat.status, stat.id as statId, addby.name, addby.id as addbyId, cat.category, cat.id as catId FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id) JOIN Worklogs wl ON (wl.id_known_error = ke.id) WHERE ke.title || wl.title || wl.description ILIKE '
            + '\'%' + text + '%\';',
            function (err, result) {
                response.json(result.rows);
        } )
    }

}