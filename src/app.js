import path from "node:path";

import express from "express";
import cors from "cors";

import config from "./config.js";
import imgConversionRouter from "./routes/imgConversionRoute.js";

const app = express();

app.use(cors({ origin: config.corsOrigin, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static(path.join(import.meta.filename, "..", "static")));

app.use("/imgConversion", imgConversionRouter);

export default app;
