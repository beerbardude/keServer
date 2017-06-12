/**
 * Created by Armin on 10.06.2017.
 */

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import DB from './db'

/*
Initialisierung der benötigen Klassen
 */
let app = express()
app.use(bodyParser.json())
app.use(cors())
const data = new DB()
const pg = require('pg');

/*
Startseite. Ruft die Funktion "getErrors" aus der DB aus und erhält alle erfassten Known Errors. Rückgabewert im JSON Format.
 */
app.get('/', function (req, res) {
    data.getErrors(res)
})

/*
Ansicht für einen spezifischen Known Error. Ruft die "getWorklogs" Funktion aus der db.js auf und erhält alle erfassten Worklogs eines Known errors. Rückgabewert im JSON Format
 */
app.get('/ke', function(req, res){
    data.getWorklogs(1, res)
})

/*
Lädt alle gültigen Statuses aus der Datenbank mit der Funktion "getStatus" aus der db.js. Wird für Dropdown Field im Client verwendet.
 */
app.get('/statuses', function(req, res) {
    data.getStatus(res)
})

/*
Lädt alle gültigen Kategorien aus der Datenbank mit der Funktion "getCategories" aus der db.js. Wird für Dropdown Field im Client verwendet.
 */
app.get('/cat', function(req, res){
    data.getCategories(res)
})

/*
Lädt die Namen aller berechtigten Mitarbeiter aus der Datenbank mit der Funktion "getNames" aus der db.js. Wird für Dropdown Field im Client verwendet.
 */
app.get('/names', function(req, res){
    data.getNames(res)
})

/*
Fügt einen neuen Error zur Datenbank hinzu.
 Die übermittelten Daten kommen im JSON Format daher. Die Parameter werden aus dem JSON ausgelesen und dem DB Query übergeben (Aufruf "addErrors" Funktion aus db.js)
 */
app.post('/add', function(req, res){
    let payload = req.body
    console.log('payload',payload)
    let title = payload.title
    console.log('add title', title)
    let status = payload.status
    console.log('add status', status)
    let name = payload.name
    console.log('add name', name)
    let category = payload.category
    console.log('add cat', category)

    data.addErrors(title, status, name, category)
    res.sendStatus(200)
})

/*
Fügt einem bestehenden Known Error einen neuen Worklog Eintrag hinzu.
Aufbau Analog /add
 */
app.post('/add_wl', function(req, res){
    let payload = req.body
    let title = payload.title
    let description = payload.description
    let name = payload.name
    let category = payload.category
    let id_known_error = payload.id_known_error

    data.addWorklogs(title, description, name, category, id_known_error)
    res.sendStatus(200)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})