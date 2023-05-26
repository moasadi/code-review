import { Request, Response } from "express";
import { Simulator } from "../models/Simulator";

export const getSimulators = async (req: Request, res: Response) => {
  try {
    const simulators = await Simulator.find().lean();
    console.log(simulators);
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
    const { profile_id } = req.params;
    const newData = {
      ...req.body,
      profile_id,
    };
    console.log(newData);
    const simulator = await Simulator.create(newData);
    res.json(simulator);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};