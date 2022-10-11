const express = require("express");
const { postUserMiddleware } = require("../middleware/postUserMiddleware");
const { editUserMiddleware } = require("../middleware/editUserMiddleware");
const {
  getOneEmployeeController,
} = require("../controllers/getOneEmployeeController");
const {
  getAllEmployeesController,
} = require("../controllers/getAllEmployeeController");
const {
  addEmployeeController,
} = require("../controllers/addEmployeeController");
const {
  updateEmployeeController,
} = require("../controllers/updateEmployeeController");
const {
  removeEmployeeController,
} = require("../controllers/removeEmployeeController");
const router = express.Router();

router.get("/", getAllEmployeesController);
router.get("/getEmployee/:id", getOneEmployeeController);
router.get("/removeEmployee/:id", removeEmployeeController);
router.post("/", postUserMiddleware, addEmployeeController);
router.post("/update", editUserMiddleware, updateEmployeeController);

module.exports = router;
