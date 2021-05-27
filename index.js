const inquirer = require('inquirer');
const htmlContent = require('./src/template.js')
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const fs = require("fs");
const employees = []
console.log(htmlContent)
const start = () => {
  inquirer
    .prompt({
      name: 'role',
      type: 'list',
      message: 'What is your role?',
      choices: ['Engineer', 'Manager', 'Intern', 'Finished'],
    })
    .then((answer) => 
    {
      if (answer.role === 'Manager') {
        createManager();
      } else if (answer.role === 'Intern') {
        createIntern();
      } else if (answer.role === 'Engineer') {
        createEngineer();
      } 
      else 
      {
        fs.writeFile("index.html", htmlContent(employees), (err) =>
        err ? console.log(err) : console.log("Success"))
        return;
      }
    });
};

const createManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is your office number?',
      name: 'officenumber',
    },
    {
      type: 'input',
      message: 'What is you What is your Email address?',
      name: 'manager_email',
    },
    {
      type: 'input',
      message: 'What is your name?',
      name: 'manager_name',
    },
    {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'manager_id',
    }
  ]).then(answer => {
    let manager = new Manager(answer.manager_name, answer.manager_id, answer.manager_email, answer.officenumber);
    employees.push(manager)
    start();
  })  
  
}
const createIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What school do you attend?',
      name: 'school',
    },
    {
      type: 'input',
      message: 'What is you What is your Email address?',
      name: 'intern_email',
    },
    {
      type: 'input',
      message: 'What is your name?',
      name: 'intern_name',
    },
    {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'intern_id',
    }
  ]).then(answer => {
    let intern = new Intern(answer.intern_name, answer.intern_id, answer.intern_email, answer.school);
    employees.push(intern)
    start();
  })  
  
}
const createEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is you What is your Email address?',
      name: 'engineer_email',
    },
    {
      type: 'input',
      message: 'What is your name?',
      name: 'engineer_name',
    },
    {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'engineer_id',
    }
  ]).then(answer => {
    let engineer = new Engineer(answer.engineer_name, answer.engineer_id, answer.engineer_email, answer.github);
    employees.push(engineer)
    start();
  })  
}
start();