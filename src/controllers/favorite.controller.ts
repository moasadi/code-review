import { Request, Response } from "express";
import { Favorite } from "../models/Favorite";
import { Profile } from "../models/Profile";

export const getFavorites = async (req: Request, res: Response) => {
  try {
    const favorites = await Favorite.find().lean();
    res.json({ favorites });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const getFavoritesByProfileId = async (req: Request, res: Response) => {
  try {
    const { profile_id } = req.params;
    const favorites = await Favorite.find({ profile_id });
    res.json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const createFavorite = async (req: Request, res: Response) => {
  try {
    const { profile_id} = req.body;
    const profile=await Profile.findById(profile_id);
    if(!profile){
      return res.status(404).json({ error: "profile not found"})
    }
    const favorite = await Favorite.create(req.body);
    res.json(favorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};