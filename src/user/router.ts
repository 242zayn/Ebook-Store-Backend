import express, { Request, Response } from "express";
import { createUser } from "./userControler";

const userRouter = express.Router();

userRouter.get("/register", (req: Request, res: Response) => {
  res.json({
    message: "User Seccesfully Ragisterd",
  });
});
userRouter.post("/register" , createUser);

export default userRouter;
