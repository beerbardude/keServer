/**
 * Created by Armin on 10.06.2017.
 */
'use strict'
let Pool = require('pg').Pool

let pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'KnownErrors',
    max: 100,
    idleTimeoutMillis: 2000,
})

export default class DB {
    getErrors(response){

          pool.on('error', function (e, client) {
            console.log(e)
        });


        pool.query('SELECT ke.id, ke.title, stat.status, addby.name, cat.category FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id)', function (err, result) {
            //let test = JSON.parse.stringify(result.rows)
            //console.log(result.rows)
            response.json(result.rows);
        });
    }

    getWorklogs(id, response){

        pool.on('error', function (e, client){
            console.log(e)
        })

       pool.query('SELECT wl.id, wl.title, wl.description, addby.name FROM Worklogs wl JOIN Added_by addby ON (wl.id_added_by = addby.id) WHERE id_known_error = ' + id+';', function (err, result) {
            response.json(result.rows);
        } )

    }

    getStatus (response){
        pool.on('error', function (e, client){
            console.log(e)
        })

        pool.query('SELECT * from Status;', function (err, result) {
            response.json(result.rows);
        })

    }

    getCategories (response ){
        pool.on('error', function (e, client){
            console.log(e)
        })

        pool.query('SELECT * from Category;', function (err, result) {
            response.json(result.rows);
        })
    }

    getNames (response) {
        pool.on('error', function (e, client){
            console.log(e)
        })

        pool.query('SELECT * from Added_by;', function (err, result) {
            response.json(result.rows);
        })
    }

    addErrors(title, id_status, id_added_by, id_category){

        pool.on('error', function (e, client){
            console.log(e)
        })

        pool.query('INSERT into KnownErrors(title, id_status, id_added_by, id_category) VALUES ($1, $2, $3, $4);',
        [title, id_status, id_added_by, id_category])
        //console.log('INSERT into KnownErrors(title, id_status, id_added_by, id_category) VALUES ($1, $2, $3, $4)')
    }

    addWorklogs(title, description, id_added_by, id_category, id_known_error){
        pool.on('error', function (e, client) {
            console.log(e)
        })

        pool.query('INSERT into Worklogs(title, description, id_added_by, id_category, id_known_error) VALUES ($1, $2, $3, $4, $5);',
        [title, description, id_added_by, id_category, id_known_error])
    }

}