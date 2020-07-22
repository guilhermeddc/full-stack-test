import { celebrate, Joi } from 'celebrate';

const Validator = {
  store: celebrate({
    body: Joi.object().keys(
      {
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
      },
      {
        abortEarly: false,
      },
    ),
  }),
  update: celebrate({
    body: Joi.object().keys(
      {
        name: Joi.string().optional(),
        email: Joi.string().email(),
        OldPassword: Joi.string().min(6),
        password: Joi.string().min(6),
        confirmPassword: Joi.string().min(6),
      },
      {
        abortEarly: false,
      },
    ),
  }),
};

export default Validator;
