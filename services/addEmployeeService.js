const addEmployeeService = async (emp) => {
  try {
    const newEmp = await emp.save();
    return newEmp;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

module.exports = { addEmployeeService };
