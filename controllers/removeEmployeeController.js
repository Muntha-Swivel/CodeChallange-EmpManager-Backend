const { removeEmployeeService } = require("../services/removeEmployeeService");
const removeEmployeeController = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedData = await removeEmployeeService(id);
    res.status(200).json({ employees: updatedData });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { removeEmployeeController };
