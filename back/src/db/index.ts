import { Sequelize } from "sequelize";

const path = "postgres://postgres:1111@localhost:5432/zoo";

export const sequelize = new Sequelize(path, {
    port: 5432,
    storage: ":memory:",
});
