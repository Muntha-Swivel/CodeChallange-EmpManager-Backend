const Employee = require("../models/Employee");

const removeEmployeeService = async (id) => {
  try {
    const deleteEmployee = await Employee.findByIdAndDelete(id);
    const updatedData = await Employee.find();
    return updatedData;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { removeEmployeeService };
