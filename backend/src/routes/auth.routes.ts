import { Router } from "express";
import {
  discordCallback,
  getUser,
  loginDiscord,
  logout,
} from "../controllers/auth.controller";

const router = Router();

router.get("/discord", loginDiscord);
router.get("/discord/callback", discordCallback);

router.get("/get-user", getUser);
router.get("/logout", logout);

export default router;
