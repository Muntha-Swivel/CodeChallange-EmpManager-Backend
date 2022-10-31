const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoute");
const connectDb = require("./config/dbConfig");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

connectDb();
app.use("/employee", employeeRoutes);
