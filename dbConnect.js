require('dotenv').config()

const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://admin:admin@cluster0.pohyldt.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})


client.connect((err,db) => {
    if(!err) {
        console.log('DB Connected')
    }
    else {
        console.log("DB Connection Error: ", err);
        process.exit(1);
    }
})

module.exports = client;