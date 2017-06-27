/**
 * Created by Pain on 27.06.2017.
 */
let Pool = require('pg').Pool

let pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'KnownErrors',
    max: 100,
    idleTimeoutMillis: 2000,
})

module.exports = pool
