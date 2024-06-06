import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userScheema from "./userModel";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const err = createHttpError(400, "All feild are required ");
    return next(err);
  }

  const user = await userScheema.findOne({ email: email });
  if (user) {
    const error = createHttpError(400, "User alrady exist");
    return next(error)
  }
};

export { createUser };
