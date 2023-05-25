import { Request, Response } from "express";
import {
    animal,
    classOfAnimal,
    featuresOfAnimal,
} from "../../../db/models/animal";

async function getClasses(req: Request, res: Response) {
    const classes = await classOfAnimal.findAll();

    if (!classes) {
        return res.json({ success: false });
    }

    res.json({ success: true, classes: classes });
}

async function getClass(req: Request, res: Response) {
    let oneClass;

    if (Number(req.params.slug)) {
        oneClass = await classOfAnimal.findOne({
            where: { id: req.params.slug },
        });
    } else {
        oneClass = await classOfAnimal.findOne({
            where: { engName: req.params.slug },
            include: [{ model: featuresOfAnimal }, { model: animal }],
        });
    }

    if (!oneClass) {
        return res.json({ success: false });
    }

    res.json({ success: true, class: oneClass });
}

export { getClasses, getClass };
