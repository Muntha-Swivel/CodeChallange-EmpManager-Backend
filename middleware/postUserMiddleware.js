const {
  addUserValidationSchema,
} = require("../Validation/userSchemaValidation");

const postUserMiddleware = (req, res, next) => {
  const { error, value } = addUserValidationSchema.validate(req.body);

  if (error) {
    console.log(error);
    return res
      .status(422)
      .json({ status: "error", error: " Unprocessable Entity" });
  }

  console.log("success");
  next();
  return;
};

module.exports = { postUserMiddleware };
