import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { user } from "../db/models/user";
import { NextFunction, Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

dotenv.config();

interface IJWT {
    id:number,
    iat:number,
    exp:number
}

interface AuthHeaders extends Request {
    
    authorization: string;
}

interface customRequest extends Request {
    userId: number;
}

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers as unknown as AuthHeaders;
    const token = (headers.authorization || "").replace(/Bearer\s?/, "");

    const customReq = req as customRequest

    if (token) {
        const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as IJWT;

        customReq.userId = decoded.id;

        next();
    } else {
        return res.json({
            success: false,
            message: "Такого токена нет",
        });
    }
};

export { checkAuth };
