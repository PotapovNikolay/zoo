import { Request, Response } from "express";
import { subscriber } from "../../../db/models/subscribers";

async function addSubscriber(req: Request, res: Response) {
    const { email } = req.body;

    const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(regex)) {
        if (!await subscriber.findOne({ where: { mail: email } })) {
            await subscriber.create({ mail: email });
            return res.json({
                success: false,
                message: "Ваш email успешно добавлен!",
            });
        }
        else{
            return res.json({ success: false, message: "Вы уже подписаны на нас, спасибо!" });
        }
    } else {
        return res.json({ success: false, message: "email не валиден" });
    }
}

export { addSubscriber };
