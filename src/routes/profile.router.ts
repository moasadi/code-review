import express from "express";
import { getProfiles, createProfile } from "../controllers/profile.controller";
import { getProfiles as vGetProfiles, createProfile as vCreateProfile } from "../validators/profile.validator";

import { validate } from "../middelwares/inputValidator"

export const router = express.Router();

router.get("/api/profile",validate(vGetProfiles), getProfiles);
router.post("/api/profile",validate(vCreateProfile), createProfile);