import { config as dotenv } from "dotenv";

dotenv();

export const PORT = process.env.PORT || 3001;
export const MONGODB_URI = process.env.MONGODB_URI;
