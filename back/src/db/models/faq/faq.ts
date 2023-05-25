
import { sequelize } from "../../index";
import {
    ModelDefined,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";

interface faqAttributes
    extends Model<
        InferAttributes<faqAttributes>,
        InferCreationAttributes<faqAttributes>
    > {
    id: number;
    question: string;
    answer: string;
    publish: boolean
}

export const faq = sequelize.define<faqAttributes>(
    "faq",
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        question: {
            type: DataTypes.TEXT,
        },
        answer: {
            type: DataTypes.TEXT,
        },
        publish:{
            type: DataTypes.BOOLEAN
        }
    },
    {
        tableName: "faq",
    }
);
