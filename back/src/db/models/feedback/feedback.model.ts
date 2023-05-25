import { sequelize } from "../../index";
import {
    ModelDefined,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";

export interface feedbackAttributes
    extends Model<
        InferAttributes<feedbackAttributes>,
        InferCreationAttributes<feedbackAttributes>
    > {
    id: number;
    name?: string;
    email?: string;
    phone?: string;
    text: string;
    createdAt: string;
    updatedAt: string;
}

export const feedback = sequelize.define<feedbackAttributes>(
    "feedbacks",
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
        email: {
            type: DataTypes.STRING(255),
        },
        text: {
            type: DataTypes.TEXT,
        },
        phone: {
            type: DataTypes.STRING(255),
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        timestamps: true,
        tableName: "feedbacks",
    }
);
