import { Schema, model, Types } from "mongoose";

const schema = new Schema(
  {
    profile_id: {
      type: Types.ObjectId,
      ref: "Profile",
    },
    name: {
      type: String,
      required: true,
    },
    favorites: {
      type: [
        {
          type: String,
          maxlength: 50,
        },
      ],
      validate: {
        validator: function (favorites) {
          return favorites.length <= 3;
        },
        message: "Favorites list can contain a maximum of 3 items.",
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Favorite = model("Favorite", schema);