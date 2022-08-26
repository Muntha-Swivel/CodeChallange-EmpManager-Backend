const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.get("/", employeeController.getAllEmployees);
router.get("/getEmployee/:id", employeeController.getEmployee);
router.get("/removeEmployee/:id", employeeController.removeEmployee);
router.post("/", employeeController.addEmployee);
router.post("/update", employeeController.updateEmployee);

module.exports = router;
