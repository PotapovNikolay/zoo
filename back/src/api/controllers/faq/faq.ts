import { faq } from "../../../db/models/faq";
import { Request, Response } from "express";

async function getFaqs(req: Request, res: Response) {
    const faqs = await faq.findAll();

    if (!faqs) {
        return res.json({ success: false });
    }

    res.json({ success: true, faqs: faqs });
}

async function getFaqsByPagination(req: Request, res: Response) {
    const faqs = await faq.findAll({
        limit: 10,
        offset: Number(req.params.offset) * 10,
        order: [["id", "ASC"]],
    });

    const countOfFaqs = await faq.count();

    if (!faqs) {
        return res.json({ success: false });
    }

    res.json({
        faqs: faqs,
        pagination: {
            count: Math.round(countOfFaqs / 10),
            start: 0,
            current: Number(req.params.offset),
        },
    });
}

async function getFaq(req: Request, res: Response) {
    const oneFaq = await faq.findOne({
        where: { id: req.params.id },
    });

    if (!oneFaq) {
        return res.json({ success: false });
    }

    res.json({ success: true, faq: oneFaq });
}

async function createFaq(req: Request, res: Response) {
    const { entity } = req.body;

    const countOfFaq = await faq.count();

    const success = await faq.create(
        Object.assign(entity, { id: countOfFaq + 1 })
    );

    if (success) {
        res.json({ success: true, message: "Актуальное успешно добавлено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

async function deleteFaq(req: Request, res: Response) {
    const { entity } = req.body;

    const success = await faq.destroy({
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

async function patchFaq(req: Request, res: Response) {
    const { entity } = req.body;

    const success = await faq.update(entity, {
        where: { id: entity.id },
    });

    if (success) {
        res.json({ success: true, message: "Животное успешно обновлено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

export {
    getFaqs,
    getFaq,
    deleteFaq,
    createFaq,
    patchFaq,
    getFaqsByPagination,
};
