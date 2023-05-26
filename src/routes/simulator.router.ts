import express from "express";
import { getSimulators, getSimulatorsByProfileId, createSimulator } from "../controllers/simulator.controller";
import { getSimulators as vGetSimulators, getSimulatorsByProfileId as vGetSimulatorsByProfileId, createSimulator as vCreateSimulator } from "../validators/simulator.validator"
import cors from "cors";
import { validate } from "../middelwares/inputValidator"

const app = express();
app.use(cors());

export const router = express.Router();

router.get("/", validate(vGetSimulators), getSimulators);
router.get("/:profile_id", validate(vGetSimulatorsByProfileId), getSimulatorsByProfileId);
router.post("/", validate(vCreateSimulator), createSimulator);
