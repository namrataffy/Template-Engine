const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

const q1 = [
  {
    name: "role",
    message: "What is the role of this employee?",
    type: "list",
    choices: ["manager", "engineer", "intern", "exit"]
  }
];
const qIntern = [
  {
    name: "name",
    message: "What is the name of this employee?",
    type: "input"
  },
  {
    name: "id",
    message: "What is the ID of this employee?",
    type: "input"
  },
  {
    name: "email",
    message: "What is the email address of this employee?",
    type: "input"
  },
  {
    name: "school",
    message: "What is the School of this employee?",
    type: "input"
  },
  {
    name: "role",
    message: "Confirm the role of this employee",
    type: "input"
  }
];

const qEng = [
  {
    name: "name",
    message: "What is the name of this employee?",
    type: "input"
  },
  {
    name: "id",
    message: "What is the ID of this employee?",
    type: "input"
  },
  {
    name: "email",
    message: "What is the email address of this employee?",
    type: "input"
  },
  {
    name: "github",
    message: "What is the Github of this employee?",
    type: "input"
  },
  {
    name: "role",
    message: "Confirm the role of this employee",
    type: "input"
  }
];

const qManager = [
  {
    name: "name",
    message: "What is the name of this employee?",
    type: "input"
  },
  {
    name: "id",
    message: "What is the ID of this employee?",
    type: "input"
  },
  {
    name: "email",
    message: "What is the email address of this employee?",
    type: "input"
  },
  {
    name: "officeID",
    message: "What is the Office number of this employee?",
    type: "input"
  },
  {
    name: "role",
    message: "Confirm the role of this employee",
    type: "input"
  }
];

let interns = [];
let engineers = [];
let managers = [];
let people = [];

function theWork(answers) {
  if (answers.role == "intern") {
    inquirer
      .prompt(qIntern)
      .then(answers => {
        let intern1 = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school,
          answers.role,
          answers.school
        );
        interns.push(intern1);
        people.push(intern1);

        console.log(interns);
      })
      .then(() => {
        inquirer.prompt(q1).then(theWork);
      });
  } else if (answers.role == "engineer") {
    inquirer
      .prompt(qEng)
      .then(answers => {
        let eng1 = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github,
          answers.role,
          answers.github
        );
        engineers.push(eng1);
        people.push(eng1);

        console.log(engineers);
      })
      .then(() => {
        inquirer.prompt(q1).then(theWork);
      });
  } else if (answers.role == "manager") {
    inquirer
      .prompt(qManager)
      .then(answers => {
        let manager1 = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeID,
          answers.role,
          answers.officeID
        );
        managers.push(manager1);
        people.push(manager1);

        console.log(managers);
      })
      .then(() => {
        inquirer.prompt(q1).then(theWork);
      });
  } else if (answers.role == "exit") {
    makeHtml();
    return;
  }
}

inquirer.prompt(q1).then(theWork);

function makeHtml() {
  let page = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
  <style>
  .cardSmall{
    width:33%;
    float: left;
  }
  h1{
    text-align:center;
  }
  </style>
  <h1 > Your Team!</h1>`;
  people.forEach(people => {
    let peopleinfo = `<div class="card  cardSmall">
    <div class="card-header text-white bg-primary ">
      <h3>${people.name}</h3>
      <h3> ${people.title}</h3>

    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item font-weight-bold">ID: ${people.id}</li>
            <li class="list-group-item font-weight-bold">Email: <a href="${people.email}">${people.email}</a></li>
            <li class="list-group-item font-weight-bold">${people.specific}</li>
        </ul>
    </div>
    </div>`;
    page += peopleinfo;
  });
  page += `</body></html>`;

  fs.writeFile("newfile.html", page, function(err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
