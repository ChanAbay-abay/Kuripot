// validationSchemas/userSchema.js
const Joi = require('joi');

const userSignupSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Please provide a valid email address.',
      'any.required': 'Email is required.',
    }),
  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters long.',
      'any.required': 'Password is required.',
    }),
});

module.exports = { userSignupSchema };
