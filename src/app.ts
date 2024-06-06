import express, { json, NextFunction, Request, Response } from "express";

import globleErrorHandler from "./middleware/GlobleErrorHandler";
import userRouter from "./user/router";

const app = express();
app.use(json());
app.use(globleErrorHandler);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "something went worng",
  });
});

// app.post("/api/users/hellow", (req, res) => {
//   res.json({
//     message: "dfdskfjdskfjdkfj ",
//   });
// });

export default app;
