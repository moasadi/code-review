import express from "express";
import { getSimulators, getSimulatorsByProfileId, createSimulator } from "../controllers/simulator.controller";
import { getSimulators as vGetSimulators, getSimulatorsByProfileId as vGetSimulatorsByProfileId, createSimulator as vCreateSimulator } from "../validators/simulator.validator"
import cors from "cors";
import { validate } from "../middelwares/inputValidator"

const app = express();
app.use(cors());

export const router = express.Router();

router.get("/api/simulator", validate(vGetSimulators), getSimulators);
router.get("/api/simulator/:profile_id", validate(vGetSimulatorsByProfileId), getSimulatorsByProfileId);
router.post("/api/simulator/:profile_id", validate(vCreateSimulator), createSimulator);
