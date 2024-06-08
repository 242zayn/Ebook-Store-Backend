import express, { json, NextFunction, Request, Response } from "express";

import globleErrorHandler from "./middleware/GlobleErrorHandler";
import userRouter from "./user/router";
import bookrouter from "./book/router";

const app = express();
app.use(json());
app.use("/api/users", userRouter);
app.use("/api/books", bookrouter);
app.use(globleErrorHandler);

app.get("/", (req, res) => {
  res.json({
    message: "something went worng",
  });
});

export default app;
