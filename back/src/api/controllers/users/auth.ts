import { Request, Response } from "express";
import { user as User } from "../../../db/models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";
dotenv.config();

async function login(req: Request, res: Response) {
    const { login, password } = req.body;

    const user = await User.findOne({ where: { login: `${login}` } });

    if (user === null) {
        return res.json({
            user:false,
            success: false,
            message: "такого юзера не существует",
        });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        return res.json({
            user: false,
            success: false,
            message: "неверный пароль",
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
        },
        `${process.env.JWT_SECRET}`,
        { expiresIn: "30d" }
    );

    res.json({
        token:token,
        user: true,
        success: true,
        message: "Выполнен вход",
    });
}


interface customRequest extends Request {
    userId: number;
}

async function getMe(req: Request, res: Response) {

    const customReq = req as customRequest;

    const user = await User.findByPk(customReq.userId);
    if (!user) {
        return res.json({
            message: "такого юзера не существует",
        });
    }
    const token = jwt.sign(
        {
            id: user.id,
        },
        `${process.env.JWT_SECRET}`,
        { expiresIn: "30d" }
    );
    res.json({
        user:true,
        success:true,
        message:null
    });
}

export { getMe, login };
