import Joi from "joi";

export const contactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(80).required(),

  email: Joi.string().trim().email().max(254).required(),

  subject: Joi.string().trim().min(3).max(120).required(),

  message: Joi.string().trim().min(10).max(3000).required(),
}).options({
  abortEarly: false,
  stripUnknown: true,
});