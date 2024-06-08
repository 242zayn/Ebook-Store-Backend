import { NextFunction, Request, Response } from "express";
import path from "node:path";
import cloudinary from "../config/cloudinary";
import bookModel from "./bookModel";
const createBook = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.files);

  // const files = req.files as { [filename: string]: Express.Multer.File[] };
  // const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
  // const fileName = files.coverImage[0].filename;
  // const filePath = path.resolve(
  //   __dirname,
  //   "../../public/data/uploads",
  //   fileName
  // );
  // const uploadsResult = await cloudinary.uploader.upload(filePath, {
  //   filename_override: fileName,
  //   folder: "book-cover",
  //   format: coverImageMimeType,
  // });

  // const bookFilename = files.file[0].filename;
  // const bookFilepath = path.resolve(
  //   __dirname,
  //   "../../public/data/uploads",
  //   fileName
  // );
  // try {
  //   const bookuploadsResult = await cloudinary.uploader.upload(bookFilepath, {
  //     resource_type: "raw",
  //     filename_override: bookFilename,
  //     folder: "book-pdfs",
  //     format: "pdf",
  //   });
  //   console.log("upload result", bookuploadsResult);
  // } catch (error) {
  //   console.log("eror on uploading pdf ff");
  // }

  res.json({});
};

export { createBook };
