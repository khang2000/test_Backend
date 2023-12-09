import Joi from "joi";
export const productValid = Joi.object({
  name: Joi.string().required().min(3),
  image: Joi.string(),
  price: Joi.number().required(),
  description: Joi.string(),
  categoryId: Joi.string(),
});
