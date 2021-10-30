// const newManager = require("./Manager");

class Manager {
    constructor (name, id, email, officeNumber) {
// name property of constructor function
        this.name = name;
// id property of constructor function
        this.id = id;
// email property of constructor function
        this.email = email;
// officeNumber property of construction function
        this.officeNumber = officeNumber;
    }
}










// Allows other files to access Manager Objects
module.exports = Manager;