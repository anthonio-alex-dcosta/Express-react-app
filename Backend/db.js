const url = "mongodb://localhost:27017/470"
const {MongoClient} = require("mongodb")
const mongoose = require("mongoose")



let dbConn

module.exports = {
    connToDb : (cb)=>{
        MongoClient.connect(url)
            .then((client)=>{
                dbConn = client.db()
                return cb()
            })
            .catch(err=>{
                console.log(err)
                return cb(err)
            })
    },
    getDb : ()=>dbConn
}
