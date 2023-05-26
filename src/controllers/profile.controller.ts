import { Request, Response } from "express";
import { Profile } from "../models/Profile";

export const getProfiles = async (req: Request, res: Response) => {
  try {
    const profiles = await Profile.find().lean();
    res.json({ profiles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const createProfile = async (req: Request, res: Response) => {
  try {
    const { email, name, nickname } = req.body;

    let profile = await Profile.findOne({ $or: [{ email }, { nickname }] }).exec();

    if (!profile) {
      profile = await Profile.create({ name, email, nickname });
    }

    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};