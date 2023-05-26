import express from "express";
import { getFavorites, getFavoritesByProfileId,createFavorite} from "../controllers/favorite.controller";
import { getFavorites as vGetFavorites , getFavoritesByProfileId as vGetFavoritesByProfileId ,createFavorite as vCreateFavorite } from "../validators/favorite.validator";
import { validate } from "../middelwares/inputValidator"
export const router = express.Router();

router.get("/",validate(vGetFavorites),getFavorites);
router.post("/",validate(vCreateFavorite),createFavorite);
router.get("/:profile_id",validate(vGetFavoritesByProfileId), getFavoritesByProfileId);