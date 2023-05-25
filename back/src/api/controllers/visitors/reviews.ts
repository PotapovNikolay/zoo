import { Request, Response } from "express";
import { review } from "../../../db/models/reviews";

async function addReview(req: Request, res: Response) {
    const { email, name, text,  publish } = req.body;

    const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!name )
        return res.json({
            success: false,
            message: "Вы не заполнили поля имени или фамилии",
        });

        if (!(await review.findOne({ where: { text: text } }))) {
            await review.create({
                mail: email,
             
                text: text,
                name: name,
                publish:publish
            });
            return res.json({
                success: false,
                message: "Ваш отзыв успешно добавлен!",
            });
        } else {
            return res.json({
                success: false,
                message: "Вы уже отправили этот отзыв, спасибо!",
            });
        }
    
}

async function getReviews(req: Request, res: Response) {
    const reviews = await review.findAll()

    if (!reviews) return res.json({ success: false });

    res.json({success:true, reviews: reviews})
}

export { addReview, getReviews };
