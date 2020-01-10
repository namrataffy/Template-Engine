const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school, title, specific) {
    super(name, id, email);
    this.school = school;
    this.title = title;
    this.specific = "School: " + school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.constructor.name;
  }
}

module.exports = Intern;
