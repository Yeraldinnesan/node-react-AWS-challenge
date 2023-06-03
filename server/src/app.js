import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes/index.js";
import path from "path";

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/dist");

const app = express();

app.use(express.static(buildPath));

app.get("/", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/dist/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes);

export default app;
