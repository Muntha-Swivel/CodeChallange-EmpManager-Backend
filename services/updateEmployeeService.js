const Employee = require("../models/Employee");

const updateEmployeeService = async (emp) => {
  const { empId, firstName, lastName, email, phone, gender, photo } = emp;

  try {
    const update = await Employee.findByIdAndUpdate(empId, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      gender: gender,
      photo: photo,
    });
    return update;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { updateEmployeeService };
