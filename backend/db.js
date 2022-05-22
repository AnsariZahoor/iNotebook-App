const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Zahoor:aXnTvIYxLAwBAbxq@cluster0.x7gyd.mongodb.net/inotebook"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;