
const Employee = require("./employee");

class Manager extends Employee{
  super(name, id, title)
  constructor(officeNumber){
    this.officeNumber=officeNumber;
  }
  getRole(){return this.constructor.name}
}

module.exports = manager;
