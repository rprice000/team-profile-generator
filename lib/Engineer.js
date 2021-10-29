// const newEngineer = require("./Engineer");

class Engineer {
    constructor (name, id, email, github) {
// name property of constructor function
        this.name = name;
// id property of constructor function
        this.id = id;
// email property of constructor function
        this.email = email;
// github property of construction function
        this.github = github;
    }
}










// Allows other files to access Engineer Objects
module.exports = Engineer;