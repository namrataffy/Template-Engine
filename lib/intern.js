
const Employee = require("./employee");

class Intern extends Employee{
  super(name, id, title)
  constructor(school){
    this.school=school;
  }
  getSchool(){return this.school}
  getRole(){return this.constructor.name}
}

module.exports = Intern;
