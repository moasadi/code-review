import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    profile_id: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
    dateRecorded: {
      type: Date,
    },
    cryptocurrency: {
      type: String,
    },
    euros: {
      type: Number,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return value >= 0 && value <= 1000000;
        },
        message: "Price must be between 0 and 1000000.",
      },
    },
    quantity: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Simulator = model("Simulator", schema);
