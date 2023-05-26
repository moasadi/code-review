import express from "express";
import { getFavorites, getFavoritesByProfileId } from "../controllers/favorite.controller";
import { getFavorites as vGetFavorites , getFavoritesByProfileId as vGetFavoritesByProfileId } from "../controllers/favorite.controller";

import { validate } from "../middelwares/inputValidator"

export const router = express.Router();

router.get("/api/favorite",validate(vGetFavorites),getFavorites);
router.get("/api/favorite/:profile_id",validate(vGetFavoritesByProfileId), getFavoritesByProfileId);