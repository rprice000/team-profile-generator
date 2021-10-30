// const newIntern = require("./Intern");

class Intern {
    constructor (name, id, email, school) {
// name property of constructor function
        this.name = name;
// id property of constructor function
        this.id = id;
// email property of constructor function
        this.email = email;
// school property of construction function
        this.school = school;
    }
}










// Allows other files to access Intern Objects
module.exports = Intern;