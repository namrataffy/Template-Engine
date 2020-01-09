
const Employee = require("./employee");

class Engineer extends Employee{
  super(name, id, title)
  constructor(github){
    this.github=github;
  }
  getGithub(){return this.getGithub}
  getRole(){return this.constructor.name}
}

module.exports = Engineer;
