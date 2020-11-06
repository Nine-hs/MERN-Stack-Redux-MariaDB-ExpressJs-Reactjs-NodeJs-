const express = require('express')
const db = require('../db/db')
const route = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


route.post('/', (req, res) => {
    const { username, password } = req.body
    sql = `SELECT ST_ID,ST_PASSWORD,ST_NAME FROM studenttb WHERE ST_USERNAME = ?`
    db.query(sql, [username], (err, rows) => {
        if (err) throw err
        if (rows != "") {
            bcrypt.compare(password, rows[0].ST_PASSWORD).then(function (result) {
                if (result) {
                    const token = jwt.sign({ userId: rows[0].ST_ID, name: rows[0].ST_NAME, status: "student" }, 'secretkey', { expiresIn: '5min' })
                    return res.status(200).json({
                        "status":"student",
                        "Loginig": "true",
                        "auth": "Successfuly",
                        "token": token
                    })

                } else {
                    return res.status(401).json({ "err": true, "msg": "Password is wrong" })
                }
            });
        } else {
            return res.status(401).json({ "err": true, "msg": "Username is wrong" })
        }
    })

})

module.exports = route;