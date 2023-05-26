import { Schema, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  capital: {
    type: Number,
    min: 0,
  },
  divisa: {
    type: String,
    enum: ["USD", "EUR", "JPY"],
  },
  preferred_cryptocurrency: {
    type: String,
    enum: ["Bitcoin", "Ethereum", "Ripple"],
  },
});

export const Profile = model("Profile", schema);