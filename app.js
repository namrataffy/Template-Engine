const inquirer = require("inquirer");

const q1 = [
  {
    name: "role",
    message: "What is the role of this employee?",
    type: "list",
    choices: ["manager", "engineer", "intern"]
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
    message: "What is the OfficeID of this employee?",
    type: "input"
  }
];

inquirer.prompt(q1).then(answers => {
  console.log(answers);
  if (answers.role == "intern") {
    inquirer.prompt(qIntern).then(answers => {
      console.log(answers);
    });
  } else if (answers.role == "engineer") {
    inquirer.prompt(qEng).then(answers => {
      console.log(answers);
    });
  } else if (answers.role == "manager") {
    inquirer.prompt(qManager).then(answers => {
      console.log(answers);
    });
  }
});
