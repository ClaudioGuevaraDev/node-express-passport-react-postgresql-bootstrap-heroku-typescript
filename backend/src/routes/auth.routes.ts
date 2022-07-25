import { Router } from "express";
import passport from "passport";
import { FRONTEND_DOMAIN } from "../config";

const router = Router();

router.get("/discord", passport.authenticate("discord"));
router.get(
  "/discord/callback",
  passport.authenticate("discord", {
    failureRedirect: `${FRONTEND_DOMAIN}/`,
    successRedirect: `${FRONTEND_DOMAIN}/`,
  })
);

export default router;
