import express, { Request, Response } from "express";
import { bookUpdate, createBook } from "./bookControler";
import multer from "multer";
import path from "node:path";
import authenticate from "../middleware/Authenticate";

const bookrouter = express.Router();

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 3e7 },
});

//  Create book
bookrouter.post(
  "/",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);

bookrouter.patch(
  "/:bookId",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  bookUpdate
);

export default bookrouter;
