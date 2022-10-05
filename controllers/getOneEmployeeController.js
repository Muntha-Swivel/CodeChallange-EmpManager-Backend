const { getOneEmployeeService } = require("../services/getOneEmployeeService");

const getOneEmployeeController = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await getOneEmployeeService(id);
    res.status(200).json({ employee: employee });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: "error", error: "Employee not found" });
  }
};

module.exports = { getOneEmployeeController };
