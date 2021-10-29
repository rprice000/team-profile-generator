// ES6 Class for Employee Objects
class Employee {
// constructor function for Employee Class 
    constructor ( name, id, email ) {
// name property of constructor function
        this.name = name;
// id property of constructor function
        this.id = id;
// email property of constructor function
        this.email = email;
    }
}






// Allows other files to access Employee Objects
module.exports = Employee;