import { Strategy as GithubStrategy } from "passport-github2";
import passport from "passport";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "../config";

const scopes = ["profile", "user:email"];

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
      scope: scopes,
    },
    (accessToken: any, refreshToken: any, profile: any, cb: any) => {
      console.log(profile);
      cb(null, profile);
    }
  )
);
