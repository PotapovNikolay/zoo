import { sequelize } from "../../index";
import {
    ModelDefined,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";

interface reviewAttributes
    extends Model<
        InferAttributes<reviewAttributes>,
        InferCreationAttributes<reviewAttributes>
    > {
    id?: number;
    name?: string;
    text: string;
    mail?: string;
    publish: boolean;
}

export const review = sequelize.define<reviewAttributes>(
    "reviews",
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(255),
        },
        text: {
            type: DataTypes.TEXT,
        },

        mail: {
            type: DataTypes.STRING(255),
        },
        publish: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        tableName: "reviews",
    }
);
