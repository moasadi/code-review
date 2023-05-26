
import Joi from "Joi";

export const createSimulator = {
  body: {
    profile_id: Joi.string().required(),
    dateRecorded: Joi.date(),
    cryptocurrency: Joi.string(),
    euros: Joi.number().min(0),
    price: Joi.number().min(0).max(1000000).required(),
    quantity: Joi.number().min(0),
  },
  query: {},
  params: {
    profile_id: Joi.string().hex().length(24).required()
  },
}


export const getSimulators = {
  body: {},
  query: {},
  params: {},
};

export const getSimulatorsByProfileId = {
  body: {},
  query: {},
  params: {
    profile_id: Joi.string().hex().length(24).required()
  },

};
