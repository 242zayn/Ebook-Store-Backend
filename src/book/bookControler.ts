import { NextFunction, Request, Response } from "express";

const createbook = async (req: Request, res: Response, next: NextFunction) => {
  const { name, price } = req.body;
};

export { createbook };
