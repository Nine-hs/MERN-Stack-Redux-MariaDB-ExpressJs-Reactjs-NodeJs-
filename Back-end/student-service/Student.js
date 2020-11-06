const express = require('express')
const db = require('../db/db')
const route = express.Router()
const Auth = require('../auth-student/auth.Student')

route.get('/', Auth(), (req, res) => {
    sql = 'SELECT ST_NUMBER,ST_NAME,ST_FACULTY,ST_MAJOR FROM studenttb INNER JOIN facultytb ON studenttb.ST_FACULTS = facultytb.facultytb INNER JOIN majors ON studenttb.ST_MAJORS = majors.ID_MAJOR'
    db.query(sql, function (err, rows) {
        if (err) throw err
        return res.status(200).json(rows)
    })

})

module.exports = route;