const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const employeeRoutes = require("./routes/employeeRoute");

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const dbURI =
  "mongodb+srv://Muntha:Muntha911@cluster0.4wfo9qm.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ users: users });
});

// const options = {
//   failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Hello World",
//       version: "1.0.0",
//     },
//     servers: [
//       {
//         url: "http://localhost:5000",
//       },
//     ],
//   },
//   apis: ["./routes*.js"],
// };

// const openapiSpecification = swaggerJsdoc(options);

//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use("/employee", employeeRoutes);
