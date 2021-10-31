// Node.js module packages
const inquirer = require('inquirer');
const fs = require('fs'); 

// Routes to Team Profile Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Creates Array of Employee Profiles generated by user input
const proiflesArray = [];


const teamManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);

        proiflesArray.push(manager); 
    })
};

const teamMembers = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
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
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(userData => {
        let { name, id, email, role, github, school, addTeamMember } = userData; 
        let newEmployee; 
        if (role === "Engineer") {
            newEmployee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            newEmployee = new Intern (name, id, email, school);
        }
        proiflesArray.push(newEmployee); 
        if (addTeamMember) {
            return teamMembers(proiflesArray); 
        } else {
            return proiflesArray;
        }
    })
}

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

teamManager()
    .then(teamMembers)
    .then(proiflesArray => {
        return generateHTML(proiflesArray);
    })
    .then(profilesHTML => {
        return writeFile(profilesHTML);
    })
    .catch(err => {
        console.log(err);
    });


