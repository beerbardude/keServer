/** db tests
 * Created by Pain on 26.06.2017.
 */
'use strict'

import assert from 'assert'

let pool = require('../config')

describe('Database', function() {
    describe('getErrors', function() {
        it('first error id should be 1', function(done) {
            pool.query("SELECT ke.id as keId, ke.title, stat.status, stat.id as statId, addby.name, addby.id as addbyId, cat.category , cat.id as catId FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id)",
                function(err, res) {
                    assert.equal(res.rows[0].keid, '1')
                    done()
            })
        })
        it('first error id should not be empty', function(done) {
            pool.query("SELECT ke.id as keId, ke.title, stat.status, stat.id as statId, addby.name, addby.id as addbyId, cat.category , cat.id as catId FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id)",
                function(err, res) {
                    assert.notEqual(res.rows[0].keid, '')
                    done()
                })
        })
        it('first error title should not be empty', function(done) {
            pool.query("SELECT ke.id as keId, ke.title, stat.status, stat.id as statId, addby.name, addby.id as addbyId, cat.category , cat.id as catId FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id)",
                function(err, res) {
                    assert.notEqual(res.rows[0].title, '')
                    done()
                })
        })
        it('first error status should not be empty', function(done) {
            pool.query("SELECT ke.id as keId, ke.title, stat.status, stat.id as statId, addby.name, addby.id as addbyId, cat.category , cat.id as catId FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id)",
                function(err, res) {
                    assert.notEqual(res.rows[0].status, '')
                    done()
                })
        })
        it('first error ad by name should not be empty', function(done) {
            pool.query("SELECT ke.id as keId, ke.title, stat.status, stat.id as statId, addby.name, addby.id as addbyId, cat.category , cat.id as catId FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id)",
                function(err, res) {
                    assert.notEqual(res.rows[0].name, '')
                    done()
                })
        })
        it('first error category should not be empty', function(done) {
            pool.query("SELECT ke.id as keId, ke.title, stat.status, stat.id as statId, addby.name, addby.id as addbyId, cat.category , cat.id as catId FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id)",
                function(err, res) {
                    assert.notEqual(res.rows[0].category, '')
                    done()
                })
        })

        it('command should be select', function(done) {
            pool.query("SELECT ke.id as keId, ke.title, stat.status, stat.id as statId, addby.name, addby.id as addbyId, cat.category , cat.id as catId FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id)",
                function(err, res) {
                    assert.equal(res.command, 'SELECT')
                    done()
                })
        })
        it('command should be not be empty', function(done) {
            pool.query("SELECT ke.id as keId, ke.title, stat.status, stat.id as statId, addby.name, addby.id as addbyId, cat.category , cat.id as catId FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id)",
                function(err, res) {
                    assert.notEqual(res.command, '')
                    done()
                })
        })
    })

    describe('getWorklogs', function() {
        it('first worklog id should be 1', function (done) {
            pool.query('SELECT wl.id, wl.title, wl.description FROM Worklogs wl',
                function (err, res) {
                    assert.equal(res.rows[0].id, '1')
                done()
            })
        })
        it('first worklog id should not be empty', function (done) {
            pool.query('SELECT wl.id, wl.title, wl.description FROM Worklogs wl',
                function (err, res) {
                    assert.notEqual(res.rows[0].id, '')
                    done()
                })
        })
        it('command should be select', function (done) {
            pool.query('SELECT wl.id, wl.title, wl.description FROM Worklogs wl',
                function (err, res) {
                    assert.equal(res.command, 'SELECT')
                    done()
                })
        })
        it('first worklog title should not be empty', function (done) {
            pool.query('SELECT wl.id, wl.title, wl.description FROM Worklogs wl',
                function (err, res) {
                    assert.notEqual(res.rows[0].title, '')
                    done()
                })
        })
        it('first worklog description should not be empty', function (done) {
            pool.query('SELECT wl.id, wl.title, wl.description FROM Worklogs wl',
                function (err, res) {
                    assert.notEqual(res.rows[0].description, '')
                    done()
                })
        })
    })
    describe('getStatus', function() {
        it('status size should be 4', function (done) {
            pool.query('SELECT * from Status;',
                function (err, res) {
                assert.equal(res.rows.length, 4)
                    done()
            })
        })
        it('status 1 should be Open', function (done) {
            pool.query('SELECT * from Status;',
                function (err, res) {
                    assert.equal(res.rows[0].id, '1')
                    assert.equal(res.rows[0].status, 'Open')
                    done()
                })
        })
        it('status 2 should be Pending', function (done) {
            pool.query('SELECT * from Status;',
                function (err, res) {
                    assert.equal(res.rows[1].id, 2)
                    assert.equal(res.rows[1].status, 'Pending')
                    done()
                })
        })
        it('status 3 should be Waiting for Release', function (done) {
            pool.query('SELECT * from Status;',
                function (err, res) {
                    assert.equal(res.rows[2].id, 3)
                    assert.equal(res.rows[2].status, 'Waiting for Release')
                    done()
                })
        })
        it('status 4 should be Resolved', function (done) {
            pool.query('SELECT * from Status;',
                function (err, res) {
                    assert.equal(res.rows[3].id, 4)
                    assert.equal(res.rows[3].status, 'Resolved')
                    done()
                })
        })
    })
    describe('getCategories', function () {
        it('category length should be 8', function (done) {
            pool.query('SELECT * from Category;',
                function (err, res) {
                    assert.equal(res.rows.length, 8)
                    done()
            })
        })
        it('category 1 should be Mobile ID', function (done) {
            pool.query('SELECT * from Category;',
                function (err, res) {
                    assert.equal(res.rows[0].id, 1)
                    assert.equal(res.rows[0].category, 'Mobile ID')
                    done()
                })
        })
        it('category 2 should be MobileIron', function (done) {
            pool.query('SELECT * from Category;',
                function (err, res) {
                    assert.equal(res.rows[1].id, 2)
                    assert.equal(res.rows[1].category, 'MobileIron')
                    done()
                })
        })
        it('category 3 should be Mobile Network', function (done) {
            pool.query('SELECT * from Category;',
                function (err, res) {
                    assert.equal(res.rows[2].id, 3)
                    assert.equal(res.rows[2].category, 'Mobile Network')
                    done()
                })
        })
        it('category 4 should be MobileIron Cloud', function (done) {
            pool.query('SELECT * from Category;',
                function (err, res) {
                    assert.equal(res.rows[3].id, 4)
                    assert.equal(res.rows[3].category, 'MobileIron Cloud')
                    done()
                })
        })
        it('category 5 should be Blackberry', function (done) {
            pool.query('SELECT * from Category;',
                function (err, res) {
                    assert.equal(res.rows[4].id, 5)
                    assert.equal(res.rows[4].category, 'Blackberry')
                    done()
                })
        })
        it('category 6 should be iOS', function (done) {
            pool.query('SELECT * from Category;',
                function (err, res) {
                    assert.equal(res.rows[5].id, 6)
                    assert.equal(res.rows[5].category, 'iOS')
                    done()
                })
        })
        it('category 7 should be Android', function (done) {
            pool.query('SELECT * from Category;',
                function (err, res) {
                    assert.equal(res.rows[6].id, 7)
                    assert.equal(res.rows[6].category, 'Android')
                    done()
                })
        })
        it('category 8 should be General', function (done) {
            pool.query('SELECT * from Category;',
                function (err, res) {
                    assert.equal(res.rows[7].id, 8)
                    assert.equal(res.rows[7].category, 'General')
                    done()
                })
        })
    })
    describe('getNames', function () {
        it('names length should be 4', function (done) {
            pool.query('SELECT * from Added_by;',
                function (err, res) {
                assert.equal(res.rows.length, 4);
                done()
            })
        })
        it('name 1 should be Armin Beiner', function (done) {
            pool.query('SELECT * from Added_by;',
                function (err, res) {
                    assert.equal(res.rows[0].id, 1);
                    assert.equal(res.rows[0].name, 'Armin Beiner');
                    done()
                })
        })
        it('name 2 should be Alex Zaeper', function (done) {
            pool.query('SELECT * from Added_by;',
                function (err, res) {
                    assert.equal(res.rows[1].id, 2);
                    assert.equal(res.rows[1].name, 'Alex Zaeper');
                    done()
                })
        })
    })
    describe('searchErrorsAndWorklogs', function () {
        it('result for search string host should be 1 with error.id 2, status open, name Alex Zaeper, category Moblie ID', function (done) {
            let searchFieldText = 'host'
            pool.query('SELECT ke.id, ke.title, stat.status, addby.name, cat.category FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id) JOIN Worklogs wl ON (wl.id_known_error = ke.id) WHERE ke.title || wl.title || wl.description ILIKE '
                + '\'%' + searchFieldText + '%\';',
                function (err, res) {
                    assert.equal(res.rows.length, 1)
                    assert.equal(res.rows[0].id, 2)
                    assert.equal(res.rows[0].status, 'Open')
                    assert.equal(res.rows[0].name, 'Alex Zaeper')
                    assert.equal(res.rows[0].category, 'Mobile ID')
                    done()
                })
        })
        it('result for empty search string should be all records (length 2)', function (done) {
            let searchFieldText = ''
            pool.query('SELECT ke.id, ke.title, stat.status, addby.name, cat.category FROM KnownErrors ke JOIN Status stat ON (ke.id_status = stat.id) JOIN Added_by addby ON (ke.id_added_by = addby.id) JOIN Category cat ON (ke.id_category = cat.id) JOIN Worklogs wl ON (wl.id_known_error = ke.id) WHERE ke.title || wl.title || wl.description ILIKE '
                + '\'%' + searchFieldText + '%\';',
                function (err, res) {
                    assert.equal(res.rows.length, 2)
                    assert.equal(res.rows[0].id, 2)
                    assert.equal(res.rows[1].id, 2)
                    done()
                })
        })
    })

})



