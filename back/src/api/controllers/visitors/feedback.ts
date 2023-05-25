import { Request, Response } from "express";
import { feedback } from "../../../db/models/feedback";

const regexMail =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const regexPhone =
    /(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

async function addFeedBack(req: Request, res: Response) {
    const { email, phone, name } = req.body;

    if (email) {

        if (email.match(regexMail)) {
            await feedback.create(email);

            res.json({
                success: false,
                message: `${name}${
                    name ? "!" : ""
                } сообщение отправлено на почту ${email}`,
            });
        } else {
            return res.json({ success: false, message: "email не валиден" });
        }
    } else if (phone) {
        if (phone.match(regexPhone)) {
            await feedback.create(phone);

            res.json({
                success: false,
                message: `${name}${
                    name ? "!" : ""
                } вам перезвонят по телефону ${phone}`,
            });
        } else {
            return res.json({ success: false, message: "телефон не валиден" });
        }
    }
}

export { addFeedBack };
