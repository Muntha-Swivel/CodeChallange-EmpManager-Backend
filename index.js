const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const employeeRoutes = require("./routes/employeeRoute");
const connectDb = require("./config/dbConfig");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

connectDb();
app.use("/employee", employeeRoutes);
