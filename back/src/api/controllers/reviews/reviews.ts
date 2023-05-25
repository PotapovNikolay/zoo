import { review } from "../../../db/models/reviews";
import { Request, Response } from "express";

async function getReviews(req: Request, res: Response) {
    const reviews = await review.findAll();

    if (!reviews) {
        return res.json({ success: false });
    }

    res.json({ success: true, reviews: reviews });
}

async function getReviewsByPagination(req: Request, res: Response) {
    const reviews = await review.findAll({
        limit: 10,
        offset: Number(req.params.offset) * 10,
        order: [["id", "ASC"]],
    });

    const countOfReviews = await review.count();

    if (!reviews) {
        return res.json({ success: false });
    }

    res.json({
        reviews: reviews,
        pagination: {
            count: Math.round(countOfReviews / 10),
            start: 0,
            current: Number(req.params.offset),
        },
    });
}

async function getReview(req: Request, res: Response) {
    const oneReview = await review.findOne({
        where: { id: req.params.id },
    });

    if (!oneReview) {
        return res.json({ success: false });
    }

    res.json({ success: true, review: oneReview });
}

async function createReview(req: Request, res: Response) {
    const { entity } = req.body;

    const countOfReview = await review.count();

    const success = await review.create(
        Object.assign(entity, { id: countOfReview + 1 })
    );

    if (success) {
        res.json({ success: true, message: "Отзыв успешно добавлен" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

async function deleteReview(req: Request, res: Response) {
    const { entity } = req.body;

    const success = await review.destroy({
        where: {
            id: entity,
        },
    });

    if (success) {
        res.json({ success: true, message: "Отзыв успешно удален" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

async function patchReview(req: Request, res: Response) {
    const { entity } = req.body;

    const success = await review.update(entity, {
        where: { id: entity.id },
    });

    if (success) {
        res.json({ success: true, message: "Отзыв успешно обновлен" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

export {
    getReviews,
    getReview,
    deleteReview,
    createReview,
    patchReview,
    getReviewsByPagination,
};
