import { NextFunction, Request, Response } from "express";
import path from "node:path";
import fs from "node:fs";
import cloudinary from "../config/cloudinary";
import bookModel from "./bookModel";
import createHttpError from "http-errors";
const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const { title, genre } = req.body;
  console.log(req.files);

  try {
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

    const bookFilename = files.file[0].filename;
    const bookFilepath = path.resolve(
      __dirname,
      "../../public/data/uploads",
      bookFilename
    );
    const bookuploadsResult = await cloudinary.uploader.upload(bookFilepath, {
      resource_type: "raw",
      filename_override: bookFilename,
      folder: "book-pdf",
      format: "pdf",
    });
    // console.log("upload resultbook=", bookuploadsResult);
    // console.log("upload result=", uploadsResult);
    // @ts-ignore
    // console.log("RequesUser ID", req.useId);

    // Save book in mongodb database

    const newBook = await bookModel.create({
      title: title,
      genre: genre,
      author: "666441c5b0b4d8e946298762",
      coverImage: uploadsResult.secure_url,
      file: bookuploadsResult.secure_url,
    });

    try {
      //   delete temp file
      fs.promises.unlink(filePath);
      fs.promises.unlink(bookFilepath);
    } catch (error) {
      createHttpError(401, "Error while deleting temp file ");
    }

    res.status(201).json({ id: newBook._id });
  } catch (error) {
    createHttpError(401, "Error while uploading file in cloudinary ");
    return next();
  }
};

export { createBook };
