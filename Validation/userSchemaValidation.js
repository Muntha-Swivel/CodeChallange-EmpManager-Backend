const Joi = require("joi");

const phoneNumberRegex =
  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

const addUserValidationSchema = Joi.object({
  firstName: Joi.string().min(6).max(10).required(),
  lastName: Joi.string().min(6).max(10).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(phoneNumberRegex),
  gender: Joi.string(),
  photo: Joi.string(),
});

const editUserValidationSchema = Joi.object({
  empId: Joi.string(),
  firstName: Joi.string().min(6).max(10).required(),
  lastName: Joi.string().min(6).max(10).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(phoneNumberRegex),
  gender: Joi.string(),
  photo: Joi.string(),
});

module.exports = { addUserValidationSchema, editUserValidationSchema };
