import express, { Request, Response } from "express";
import {
  allBookList,
  bookUpdate,
  createBook,
  deleteBook,
  oneBookFind,
} from "./bookControler";
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

// upade book
bookrouter.patch(
  "/:bookId",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  bookUpdate
);

// read book list of all book
bookrouter.get("/", allBookList);

// find spacial book get methed
bookrouter.get("/:bookId", oneBookFind);

// delete book
bookrouter.delete("/:bookId", deleteBook);

export default bookrouter;
