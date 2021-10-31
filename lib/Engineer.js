// Engineer Class requires Employee Class Propteries shared by all Empolyee Objects
const Employee = require("./Employee");

class Engineer extends Employee {
// constructor function for Engineer Class 
    constructor (name, id, email, github) {
        super(name, id, email);
// name property of constructor function
        // this.name = name;
// id property of constructor function
        // this.id = id;
// email property of constructor function
        // this.email = email;
// github property of construction function
        this.github = github;
    }
// getRole method for Engineer class
    getRole() {
        return "Engineer";
    }
// getGitHub method for Engineer class
    getGitHub() {
        return this.github;
    }
}










// Allows other files to access Engineer Objects
module.exports = Engineer;