const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {connToDb, getDb} = require("./db")

const UserModel = require("./Models/Users")

const url="mongodb://localhost:27017/470"

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(url)

app.listen(5000, ()=>{
    console.log("Backend running in port 5000")
})



app.post("/register", (req,res)=>{
    UserModel.create(req.body)
    .then(entry => res.json(entry))
    .catch(err => res.json(err))
})


app.get("/login", (req, res)=>{
    let {email, password} = req.body
    UserModel.findOne({email: email})
    .then(usr =>{
        if(usr){
            if(usr.password ===password){
                res.json("acknowledge")
            }
            else{
                res.json("Pass Incorrect")
            }
        }
        else{
            res.json("Email Incorrect")
        }
    })
})