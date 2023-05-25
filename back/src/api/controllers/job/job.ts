import { job } from "../../../db/models/job";
import { Request, Response } from "express";

async function getJobs(req: Request, res: Response) {
    const jobs = await job.findAll();

    if (!jobs) {
        return res.json({ success: false });
    }

    res.json({ success: true, jobs: jobs });
}

async function getJobsByPagination(req: Request, res: Response) {
    const jobs = await job.findAll({
        limit: 10,
        offset: Number(req.params.offset) * 10,
        order: [["id", "ASC"]],
    });

    const countOfJobs = await job.count();

    if (!jobs) {
        return res.json({ success: false });
    }

    res.json({
        jobs: jobs,
        pagination: {
            count: Math.round(countOfJobs / 10),
            start: 0,
            current: Number(req.params.offset),
        },
    });
}

async function getJob(req: Request, res: Response) {
    const oneJob = await job.findOne({
        where: { id: req.params.id },
    });

    if (!oneJob) {
        return res.json({ success: false });
    }

    res.json({ success: true, job: oneJob });
}

async function createJob(req: Request, res: Response) {
    const { entity } = req.body;

    const countOfJob = await job.count();

    const success = await job.create(
        Object.assign(entity, { id: countOfJob + 1 })
    );

    if (success) {
        res.json({ success: true, message: "Актуальное успешно добавлено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

async function deleteJob(req: Request, res: Response) {
    const { entity } = req.body;

    const success = await job.destroy({
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

async function patchJob(req: Request, res: Response) {
    const { entity } = req.body;

    const success = await job.update(entity, {
        where: { id: entity.id },
    });

    if (success) {
        res.json({ success: true, message: "Животное успешно обновлено" });
    } else {
        res.json({ success: false, message: "Что-то пошло не так..." });
    }
}

export {
    getJobs,
    getJob,
    deleteJob,
    createJob,
    patchJob,
    getJobsByPagination,
};
