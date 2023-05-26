import { Request, Response } from "express";
import { Simulator } from "../models/Simulator";
import { Profile } from "../models/Profile";

export const getSimulators = async (req: Request, res: Response) => {
  try {
    const simulators = await Simulator.find().lean();
    res.json({ simulators });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const getSimulatorsByProfileId = async (req: Request, res: Response) => {
  try {
    const { profile_id } = req.params;
    const simulators = await Simulator.find({ profile_id });
    res.json(simulators);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const createSimulator = async (req: Request, res: Response) => {
  try {
    const {profile_id} = req.body;
    const profile=await Profile.findById(profile_id);
    if(!profile){
      return res.status(404).json({ error: "profile not found"})
    }

    const simulator = await Simulator.create(req.body);
    res.json(simulator);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};