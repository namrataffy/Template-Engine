const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github, title, specific) {
    super(name, id, email);
    this.title = title;
    this.github = github;
    this.specific = "Github: " + github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.constructor.name;
  }
}

module.exports = Engineer;
