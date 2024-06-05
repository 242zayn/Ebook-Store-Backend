import express, { NextFunction, Request, Response } from "express";

import { config } from "./config/config";
import createHttpError, { HttpError } from "http-errors";
import globleErrorHandler from "./middleware/GlobleErrorHandler";

const app = express();

app.get("/", (req, res) => {
  const error = createHttpError(400, "Something went worng");
  throw error;
});

app.use(globleErrorHandler);

export default app;
