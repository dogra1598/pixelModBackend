import express from "express";
import * as imgConversionController from "../controllers/imgConversionController.js";

const imgConversionRouter = express.Router({
  // caseSensitive: true,
  // strict: true,
});

imgConversionRouter.post("/upload", imgConversionController.upload);

export default imgConversionRouter;
