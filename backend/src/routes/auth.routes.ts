import { Router } from "express";
import {
  discordCallback,
  getUser,
  githubCallback,
  loginDiscord,
  loginGithub,
  logout,
} from "../controllers/auth.controller";

const router = Router();

router.get("/discord", loginDiscord);
router.get("/discord/callback", discordCallback);
router.get("/github", loginGithub);
router.get("/github/callback", githubCallback);

router.get("/get-user", getUser);
router.get("/logout", logout);

export default router;
