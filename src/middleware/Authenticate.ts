import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { verify } from "jsonwebtoken";
import { config } from "../config/config";

export interface authRequest extends Request {
  useId: string;
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const tokent = req.header("Authorization");

  if (!tokent) {
    return next(createHttpError(401, "Authorization tokent is required."));
  }

  const parsedToken = tokent.split(" ")[1];
  console.log(parsedToken);

  try {
    const decode = verify(parsedToken, config.jwtsecret as string);
    console.log(decode);

    const _req = req as authRequest;
    _req.useId = decode.sub as string;
    next();
  } catch (error) {
    return next(createHttpError(401, "Token is expreired"));
  }
};

export default authenticate;
