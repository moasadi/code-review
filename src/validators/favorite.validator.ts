import Joi from "Joi";

export const createFavorite = {
  body: {
    profile_id: Joi.string().required(),
    name: Joi.string().required(),
    favorites: Joi.array().items(Joi.string().max(50)).max(3).required(),
  },
  query: {},
  params: {},
}



export const getFavoritesByProfileId = {
  body: {},
  query: {},
  params: {
    profile_id: Joi.string().hex().length(24).required()
  },
};
