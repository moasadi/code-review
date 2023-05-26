import mongoose from "mongoose";
import { Profile } from "../models/Profile";
import { Simulator } from "../models/Simulator";
import { Favorite } from "../models/Favorite";
import { DBURL } from "../config";

(async () => {
  try {
    await mongoose.connect(DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const profileData = {
      name: "John Doe",
      email: "john.doe@example.com",
      capital: 1000,
      divisa: "USD",
      preferred_cryptocurrency: "Bitcoin",
    };

    const createdProfile = await Profile.create(profileData);

    const simulatorData = {
      profile_id: createdProfile._id,
      dateRecorded: new Date(),
      cryptocurrency: "Bitcoin",
      euros: 500,
      price: 50000,
      quantity: 0.01,
    };

    const createdSimulator = await Simulator.create(simulatorData);

    const favoriteData = {
      profile_id: createdProfile._id,
      name: "John Doe",
      favorites: ["Bitcoin", "Doge", "Bnb"],
    };

    const createdFavorite = await Favorite.create(favoriteData);

    console.log("Database seeding completed successfully.");

    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding the database:", error);
    mongoose.disconnect();
  }
})();