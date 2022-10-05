const Employee = require("../models/Employee");

const getAllEmployeesService = async () => {
  try {
    const employees = await Employee.find();
    return employees;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { getAllEmployeesService };
