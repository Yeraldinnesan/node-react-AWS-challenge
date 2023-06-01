import app from "./src/app.js";

import { connect } from "mongoose";

import { PORT, MONGODB_URI } from "./config.js";

async function connectDB() {
  try {
    await connect(MONGODB_URI);
    console.log("Conencted to MongoDB Atlas");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

connectDB();

app.listen(PORT, () => console.log(`listening at ${PORT}`));
