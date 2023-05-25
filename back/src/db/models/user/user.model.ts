import { sequelize } from "../../index";
import bcrypt from "bcryptjs";

import {
    ModelDefined,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";

interface userAttributes
    extends Model<
        InferAttributes<userAttributes>,
        InferCreationAttributes<userAttributes>
    > {
    id?: number;
    login: string;
    password: string;
}

export const user = sequelize.define<userAttributes>(
    "user",
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },

        login: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        tableName: "users",
    }
);

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("admin", salt);

export const admin = { login: "admin", password: hash };
