// Node.js module packages
const inquirer = require('inquirer');
const fs = require('fs'); 

// Routes to Team Profile Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function createNewEmployee() {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern', 'Manager']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            when: (input) => input.role === "Manager",
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(userInput => {
        let { role, name, id, email, github, school, officeNumber, confirmAddEmployee } = userInput;
        let newEmployee;

        if (role === "Engineer") {
            newEmployee = new Engineer (name, id, email, github);
            console.log(newEmployee);
        }
        else if (role === "Intern" ) {
            newEmployee = new Intern (name, id, email, school);
            console.log(newEmployee);
        }
        else if (role === "Manager" ) {
            newEmployee = new Manager (name, id, email, officeNumber);
            console.log(newEmployee);
        }
    
    })
};

const writeFile = answers => {
    fs.writeFile('./dist/index.html', answers, err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log('Team Profiles have been created on index.html.')
        }
    })
};

createNewEmployee();


