const express = require('express')
const db = require('../db/db')
const bcrypt = require('bcrypt');
const route = express.Router()

route.post('/', (req, res) => {
    const { student_id, nat_id, st_name, st_user, st_pass, st_faculty, st_major, st_program, st_year } = req.body
    db.query(`SELECT ST_NUMBER FROM studenttb WHERE ST_NUMBER = ?`, [student_id], (err, rows, fields) => {
        if (err) { throw err }
        if (rows == "") { 
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(st_pass, salt, (err, hash) => {
                    sql = `INSERT INTO studenttb(ST_NUMBER, ST_ID_NAT, ST_NAME, ST_USERNAME, ST_PASSWORD, ST_FACULTS, ST_MAJORS, ST_PROGRAMS, ST_GEN) VALUES (?,?,?,?,?,?,?,?,?)`
                    db.query(sql, [student_id, nat_id, st_name, st_user, hash, st_faculty, st_major, st_program, st_year], function (err, rows, fields) {
                        if (err) return res.send(err)
                            return res.send(rows).json()
                    })
                });
            });
         }
         else{
             return res.send("Account is Duplicated")
         }
    })
})

module.exports = route;