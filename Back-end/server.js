const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const Student = require('./student-service/Student')
const Register = require('./student-service/Register')
const Login = require('./student-service/Login')
const cors =require('cors')

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
bodyParser.urlencoded({ extended: false })
app.get('',(req,res)=> res.send("hello"))
app.use('/students',Student)
app.use('/register',Register)
app.use('/login',Login)

app.listen(3000,()=>{
    console.log('Server run at port '+3000)
})

