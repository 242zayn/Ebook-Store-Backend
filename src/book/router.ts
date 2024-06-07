import express, { Request, Response } from "express";
import { createbook } from "./bookControler";
import multer from "multer";
import path from "node:path";

const bookrouter = express.Router();

// bookrouter.get("/book", (req: Request, res: Response) => {
//   res.json({
//     message: "User Seccesfully Ragisterd",
//   });
// });

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 3e7 },
});

bookrouter.post("/", upload.fields([
{name:"coverImage", maxCount:1},
{name:"file",maxCount:1}
]), createbook);

export default bookrouter;
