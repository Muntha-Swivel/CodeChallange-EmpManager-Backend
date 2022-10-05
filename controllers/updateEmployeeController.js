const { updateEmployeeService } = require("../services/updateEmployeeService");

const updateEmployeeController = async (req, res) => {
  const { empId, firstName, lastName, email, phone, gender, photo } = req.body;
  const emp = {
    empId: empId,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    gender: gender,
    photo: photo,
  };

  try {
    const update = await updateEmployeeService(emp);
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { updateEmployeeController };
