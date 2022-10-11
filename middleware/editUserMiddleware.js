const {
  editUserValidationSchema,
} = require("../Validation/userSchemaValidation");

const editUserMiddleware = (req, res, next) => {
  const { error, value } = editUserValidationSchema.validate(req.body);

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

module.exports = { editUserMiddleware };
