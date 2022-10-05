const { getAllEmployeesService } = require("../services/getAllEmployeeService");

const getAllEmployeesController = async (req, res) => {
  try {
    const employees = await getAllEmployeesService();
    res.status(200).json({ employees: employees });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: "error", error: "Not found" });
  }
};

module.exports = { getAllEmployeesController };
