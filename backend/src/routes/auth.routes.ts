import { Router } from "express";
import {
  discordCallback,
  getUser,
  loginDiscord,
} from "../controllers/auth.controller";

const router = Router();

router.get("/discord", loginDiscord);
router.get("/discord/callback", discordCallback);

router.get("/get-user", getUser);

export default router;
