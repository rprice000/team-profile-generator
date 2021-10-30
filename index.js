// Node.js module packages
const fs = require('fs'); 
const inquirer = require('inquirer');

// Routes to Team Profile Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');