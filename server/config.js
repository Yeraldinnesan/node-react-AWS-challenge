import { config as dotenv } from "dotenv";

dotenv();

export const PORT = process.env.PORT || 3001;
export const MONGODB_URI = process.env.MONGODB_URI;

// COUNTRIES API

export const API_TOKEN = process.env.API_TOKEN;
export const API_EMAIL = process.env.API_EMAIL;
