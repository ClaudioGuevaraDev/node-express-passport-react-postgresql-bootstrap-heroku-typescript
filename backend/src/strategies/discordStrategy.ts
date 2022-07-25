import { Strategy as DiscordStrategy } from "passport-discord";
import passport from "passport";
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "../config";

const scopes = ["identify", "email"];

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((user: any, done) => {
  return done(null, user);
});

passport.use(
  new DiscordStrategy(
    {
      clientID: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      callbackURL: "/auth/discord/callback",
      scope: scopes,
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      cb(null, profile);
    }
  )
);
