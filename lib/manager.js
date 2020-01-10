const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber, title, specific) {
    super(name, id, email);
    this.title = title;
    this.specific = "Office number: " + officeNumber;

    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return this.constructor.name;
  }
}

module.exports = Manager;
