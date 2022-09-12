require('dotenv').config()

const MongoClient = require('mongodb').MongoClient
//add database connection...
const uri = 'mongodb+srv://abatoo:admin@cluster0.k20uelk.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect((err,db) => {
    if(!err) {
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})

exports.MongoClient = client;