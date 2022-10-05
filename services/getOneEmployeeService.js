const Employee = require("../models/Employee");

const getOneEmployeeService = async (id) => {
  try {
    const employee = await Employee.findById(id);
    return employee;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { getOneEmployeeService };
