import { actual } from "../../../db/models/actual";
import { Request, Response } from "express";

async function getActuals(req: Request, res: Response) {
    const actuals = await actual.findAll();

    if (!actuals) {
        return res.json({ success: false });
    }

    res.json({ success: true, actuals: actuals });
}

async function getActualsByPagination(req: Request, res: Response) {
    const actuals = await actual.findAll({
        limit: 10,
        offset: Number(req.params.offset) * 10,
        order: [["id", "ASC"]],
    });

    const countOfActuals = await actual.count();

    if (!actuals) {
        return res.json({ success: false });
    }

    
    res.json({
        actuals: actuals,
        pagination: {
            count: Math.round(countOfActuals / 10),
            start: 0,
            current: Number(req.params.offset),
        },
    });
}

async function getActual(req: Request, res: Response) {
    const oneActual = await actual.findOne({
        where: { id: req.params.id },
    });

    if (!oneActual) {
        return res.json({ success: false });
    }

    res.json({ success: true, actual: oneActual });
}

async function createActual(req: Request, res: Response) {
    const { entity } = req.body;

    const countOfActual = await actual.count();

    const success = await actual.create(
        Object.assign(entity, { id: countOfActual + 1 })
    );

    if (success) {
        res.json({ success: true, message: "Актуальное успешно добавлено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

async function deleteActual(req: Request, res: Response) {
    const { entity } = req.body;

    const success = await actual.destroy({
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

async function patchActual(req: Request, res: Response) {
    const { entity } = req.body;

    const success = await actual.update(entity, {
        where: { id: entity.id },
    });

    if (success) {
        res.json({ success: true, message: "Животное успешно обновлено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

export {
    getActuals,
    getActual,
    deleteActual,
    createActual,
    patchActual,
    getActualsByPagination,
};
