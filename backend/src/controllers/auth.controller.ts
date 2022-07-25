import { Request, Response } from "express";
import passport from "passport";
import { FRONTEND_DOMAIN } from "../config";

export const loginDiscord = passport.authenticate("discord");

export const discordCallback = passport.authenticate("discord", {
  failureRedirect: `${FRONTEND_DOMAIN}/`,
  successRedirect: `${FRONTEND_DOMAIN}/`,
});

export const getUser = (req: Request, res: Response) => {
    console.log(req.user)
  if (req.user) {
    return res.status(200).json({
      user: req.user,
    });
  } else {
    return res.status(404).json({
      message: "User not found",
    });
  }
};