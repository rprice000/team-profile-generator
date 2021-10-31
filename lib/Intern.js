// Intern Class requires Employee Class Propteries shared by all Empolyee Objects
const Employee = require("./Employee");

class Intern extends Employee {
// constructor function for Intern Class 
    constructor (name, id, email, school) {
// constructor properties applied to Intern Class from Employee Class Objects
        super(name, id, email);
// school property of construction function
        this.school = school;
    }
// getRole method for Engineer class
    getRole() {
        return "Intern";
    }
// getSchool method for Engineer class
    getSchool() {
        return this.school;
    }
}










// Allows other files to access Intern Objects
module.exports = Intern;