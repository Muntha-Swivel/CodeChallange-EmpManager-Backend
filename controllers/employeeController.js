const Employee = require("../models/Employee");

const getEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    res.status(200).json({ employee: employee });
  } catch (err) {
    console.log(err);
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({ employees: employees });
  } catch (err) {
    console.log(err);
  }
};

const addEmployee = async (req, res) => {
  const emp = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    empId: req.body.empId,
    photo: req.body.photo,
  });

  try {
    await emp.save();
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
  }
};

const updateEmployee = async (req, res) => {
  const { empId, firstName, lastName, email, phone, gender, photo } = req.body;

  try {
    const update = await Employee.findByIdAndUpdate(empId, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      gender: gender,
      photo: photo,
    });
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
  }
};

const removeEmployee = (req, res) => {
  const { id } = req.params;

  Employee.findOneAndDelete({ empId: id })
    .then((result) => {
      res.json({ message: "done" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getEmployee,
  addEmployee,
  removeEmployee,
  getAllEmployees,
  updateEmployee,
};
