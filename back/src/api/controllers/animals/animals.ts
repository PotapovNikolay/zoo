import { Request, Response } from "express";
import { animal, classOfAnimal, imagesOfAnimal } from "../../../db/models/animal";

async function getAnimals(req: Request, res: Response) {
    const animals = await animal.findAll({
        include: [{ model: imagesOfAnimal }],
    });

    if (!animals) {
        return res.json({ success: false });
    }

    res.json({ success: true, animals: animals });
}

async function getAnimalsByPagination(req: Request, res: Response) {
    const animals = await animal.findAll({
        include: [{ model: imagesOfAnimal }],
        limit: 10,
        offset: Number(req.params.offset) * 10,
        order: [["id", "ASC"]],
    });

    const countOfAnimals = await animal.count();

    if (!animals) {
        return res.json({ success: false });
    }

    res.json({
        animals: animals,
        pagination: {
            count: Math.round(countOfAnimals / 10),
            start: 0,
            current: Number(req.params.offset),
        },
    });
}

async function getAnimal(req: Request, res: Response) {


    let oneAnimal = null;

    if (Number(req.params.slug)) {
        oneAnimal = await animal.findOne({
            where: { id: req.params.slug },
            include: [{ model: imagesOfAnimal }],
        });
    } else {
        oneAnimal = await animal.findOne({
            where: { engName: req.params.slug },
            include: [{ model: imagesOfAnimal }],
        });
    }

    
    if (!oneAnimal) return res.json({ success: false });

    res.json({ success: true, animal: oneAnimal });
}

async function createAnimal(req: Request, res: Response) {
    const { entity } = req.body;

    const countOfAnimals = await animal.count();

    const success = await animal.create(Object.assign(entity, {id:countOfAnimals+1}));

    if (success) {
        res.json({ success: true, message: "Животное успешно добавлено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

async function deleteAnimal(req: Request, res: Response) {
    const {entity} = req.body;

    const success = await animal.destroy({where:{
        id:entity
    }});

    if (success) {
        res.json({ success: true, message: "Животное успешно удалено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

async function patchAnimal(req: Request, res: Response) {
    const {entity} = req.body;

    const success = await animal.update(entity, {
        where: { id: entity.id },
    });

    if (success) {
        res.json({ success: true, message: "Животное успешно обновлено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

async function uploadImage(req: Request, res: Response) {

    const imageName = req.file?.filename;
    const description = req.body?.path;

    // Save this data to a database probably

    console.log(description, imageName);
    
}


export {
    getAnimal,
    getAnimals,
    getAnimalsByPagination,
    patchAnimal,
    deleteAnimal,
    createAnimal,
    uploadImage,
};
