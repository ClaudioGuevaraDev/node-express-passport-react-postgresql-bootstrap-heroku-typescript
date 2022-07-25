import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || "4000";
export const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN || "http://localhost:5173";
export const SECRET_KEY = process.env.SECRET_KEY || "key123";
export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || "";
export const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || "";