import { NextFunction, Request, Response } from "express";
import path from "node:path";
import cloudinary from "../config/cloudinary";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.files);

  const files = req.files as { [filename: string]: Express.Multer.File[] };
  const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
  const fileName = files.coverImage[0].filename;
  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );
  const uploadsResult = await cloudinary.uploader.upload(filePath, {
    filename_override: fileName,
    folder: "book-cover",
    format: coverImageMimeType,
  });
  console.log("upload result", uploadsResult);
  res.json({});
};

export { createBook };
