import Joi from "joi";
export const signUpValidator = Joi.object({
  userName: Joi.string().required().min(1).max(255).messages({
    "string.empty": "userName khong duoc de trong",
    "any.required": "userName la bat buoc",
    "string.min": "userName phai co it nhat {#limit} ky tu",
    "string.max": "userName phai co it hon {#limit + 1} ky tu",
  }),
  email: Joi.string().required().email().messages({
    "string.empty": "Email khong duoc de trong",
    "any.required": "Email la bat buoc",
    "string.email": "Email khong dung dinh dang",
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.empty": "password khong duoc de trong",
    "any.required": "password la bat buoc",
    "string.min": "password phai co it nhat {#limit} ky tu",
    "string.max": "password phai co it hon {#limit + 1} ky tu",
  }),
  confirmPassword: Joi.string()
    // .required()
    .min(6)
    .max(255)
    .valid(Joi.ref("password"))
    .messages({
      "string.empty": "Mật khẩu khong duoc de trong",
      // "any.required": "Mật khẩu la bat buoc",
      "string.min": "Mật khẩu phai co it nhat {#limit} ky tu",
      "string.max": "Mật khẩu phai co it hon {#limit + 1} ky tu",
      "any.only": "Mật khẩu nhập lại không khớp",
    }),
  role: Joi.string(),
  addressBorn: Joi.string(),
  image: Joi.string(),
  position: Joi.string(),
  id_number: Joi.string(),
  birthday: Joi.string(),
  description: Joi.string(),
});

export const signInValidator = Joi.object({
  email: Joi.string().required().email().messages({
    "string.empty": "Email khong duoc de trong",
    "any.required": "Email la bat buoc",
    "string.email": "Email khong dung dinh dang",
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.empty": "password khong duoc de trong",
    "any.required": "password la bat buoc",
    "string.min": "password phai co it nhat {#limit} ky tu",
    "string.max": "password phai co it hon {#limit + 1} ky tu",
  }),
});
