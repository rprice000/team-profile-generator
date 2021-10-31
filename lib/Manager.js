// Manager Class requires Employee Class Propteries shared by all Empolyee Objects
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
// constructor properties applied to Manager Class from Employee Class Objects
        super(name, id, email);
// // name property of constructor function
//         this.name = name;
// // id property of constructor function
//         this.id = id;
// // email property of constructor function
//         this.email = email;
// officeNumber property of construction function
        this.officeNumber = officeNumber;
    }
// getRole method for Manager class
    getRole() {
        return "Manager";
    }
// getSchool method for Manager class
    getofficeNumber() {
        return this.officeNumber;
    }    
}










// Allows other files to access Manager Objects
module.exports = Manager;