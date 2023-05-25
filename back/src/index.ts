import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import helmet from "helmet";
import { limiter } from "./helpers/limiter";

import { create } from "./db/models/associations";
import { sequelize } from "./db";

import {
    animalRouter,
    visitorsRouter,
    usersRouter,
    actualRouter,
    reviewRouter,
    jobRouter,
    faqRouter,
    feedbackRouter,
} from "./api/routes";

const app = express();

//security
app.use(helmet());
app.use(limiter);

//public
app.use(express.static("public"));
app.use("/static", express.static(__dirname + "/public"));

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("", animalRouter);
app.use("", visitorsRouter);
app.use("", usersRouter);
app.use("", actualRouter);
app.use("", jobRouter);
app.use("", reviewRouter);
app.use("", faqRouter);
app.use("", feedbackRouter)

async function init() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        create();
        app.listen(process.env.PORT, () => {
            console.log(`Example app listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

init();
