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
// getName method for employee class
    getName() {
            return this.name;
    }
// getId method for employee class
    getId() {
            return this.id;
    }
// getEmail method for employee class
    getEmail() {
            return this.email;
    }
// getRole method for employee class
    getRole() {
            return "Employee";
    }
}







// Allows other files to access Employee Objects
module.exports = Employee;