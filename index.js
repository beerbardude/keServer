/**
 * Created by Armin on 10.06.2017.
 */

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import DB from './db'

let app = express()
app.use(bodyParser.json())
app.use(cors())
const data = new DB()
const pg = require('pg');

app.get('/', function (req, res) {
    data.getErrors(res)
})

app.get('/ke', function(req, res){
    data.getWorklogs(1, res)
})

app.get('/statuses', function(req, res) {
    data.getStatus(res)
})

app.get('/cat', function(req, res){
    data.getCategories(res)
})

app.get('/names', function(req, res){
    data.getNames(res)
})

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

app.post('add_wl', function(req, res){
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