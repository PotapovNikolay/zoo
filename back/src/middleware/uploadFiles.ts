import multer, { FileFilterCallback } from "multer";
import path from "path";
import express, { Request, Response } from "express";
import fs from "fs";

const uploadDirectory = "src/public/images/";

interface AuthHeaders extends Request {
    folder: string;
    name: string;
}

const storage = multer.diskStorage({
    destination: function (req: Request, file: any, cb: any) {
        const headers = req.headers as unknown as AuthHeaders;

        if (!fs.existsSync(uploadDirectory)) {
            fs.mkdirSync(uploadDirectory, { recursive: true });
        }

        cb(null, uploadDirectory + headers.folder + "/");
    },
    filename: function (req: Request, file: any, cb: any) {
        const headers = req.headers as unknown as AuthHeaders;

        cb(null, headers.name + "." + file.originalname.split(".").pop());
    },
});

export const upload = multer({
    storage: storage,
    // fileFilter: function (
    //     req: Request,
    //     file: Express.Multer.File,
    //     cb: FileFilterCallback
    // ) {
    //     const filetypes = /jpeg|jpg|png/;
    //     const mimetype = filetypes.test(file.mimetype);
    //     const extname = filetypes.test(
    //         path.extname(file.originalname).toLowerCase()
    //     );

    //     if (mimetype && extname) {
    //         return cb(null, true);
    //     }

    //     cb(new Error("Only images with jpeg, jpg or png format are allowed."));
    // },
});
