let client = require("../dbConnect")

let projectsCollection; 
setTimeout(()=>{
    projectsCollection = client.db().collection("Pets")
}, 2000)

const insertProjects = (project, callback) => {
    projectsCollection.insert(project,callback);
}

const getProjects = (callback) => {
    projectsCollection.find({}).toArray(callback);
}

module.exports={insertProjects,getProjects}