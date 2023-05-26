import Joi from "Joi";

export const createProfile = {
  body: {
    name: Joi.string().required(),
    nickname: Joi.string().required(),
    email: Joi.string().email().required(),
    capital: Joi.number().min(0),
    divisa: Joi.string().valid("USD", "EUR", "JPY"),
    preferred_cryptocurrency: Joi.string().valid("Bitcoin", "Ethereum", "Ripple"),
  },
  query: {},
  params: {},
}

export const getProfiles = {
  body: {},
  query: {},
  params: {},
};
