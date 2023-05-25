import { feedback } from "../../../db/models/feedback";
import { Request, Response } from "express";

async function getFeedbacks(req: Request, res: Response) {
    const feedbacks = await feedback.findAll();

    if (!feedbacks) {
        return res.json({ success: false });
    }

    res.json({ success: true, feedbacks: feedbacks });
}

async function getFeedbacksByPagination(req: Request, res: Response) {
    const feedbacks = await feedback.findAll({
        limit: 10,
        offset: Number(req.params.offset) * 10,
        order: [["id", "ASC"]],
    });

    const countOfFeedbacks = await feedback.count();

    if (!feedbacks) {
        return res.json({ success: false });
    }

    res.json({
        feedbacks: feedbacks,
        pagination: {
            count: Math.round(countOfFeedbacks / 10),
            start: 0,
            current: Number(req.params.offset),
        },
    });
}

async function getFeedback(req: Request, res: Response) {
    const oneFeedback = await feedback.findOne({
        where: { id: req.params.id },
    });

    if (!oneFeedback) {
        return res.json({ success: false });
    }

    res.json({ success: true, feedback: oneFeedback });
}

async function createFeedback(req: Request, res: Response) {
    const { entity } = req.body;

    const countOfFeedback = await feedback.count();

    const success = await feedback.create(
        Object.assign(entity, { id: countOfFeedback + 1 })
    );

    if (success) {
        res.json({ success: true, message: "Актуальное успешно добавлено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

async function deleteFeedback(req: Request, res: Response) {
    const { entity } = req.body;

    const success = await feedback.destroy({
        where: {
            id: entity,
        },
    });

    if (success) {
        res.json({ success: true, message: "Актуальное успешно удалено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

async function patchFeedback(req: Request, res: Response) {
    const { entity } = req.body;

    const success = await feedback.update(entity, {
        where: { id: entity.id },
    });

    if (success) {
        res.json({ success: true, message: "Животное успешно обновлено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

export {
    getFeedbacks,
    getFeedback,
    deleteFeedback,
    createFeedback,
    patchFeedback,
    getFeedbacksByPagination,
};
