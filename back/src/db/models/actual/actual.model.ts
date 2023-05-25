import { sequelize } from "../../index";
import {
    ModelDefined,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";

interface actualAttributes
    extends Model<
        InferAttributes<actualAttributes>,
        InferCreationAttributes<actualAttributes>
    > {
    id: number;
    title: string;
    description: string;
    image: string;
    active: boolean;
}

export const actual = sequelize.define<actualAttributes>(
    "actuals",
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        title: {
            type: DataTypes.STRING(255),
        },
        description: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.STRING(255),
        },
        active: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        tableName: "actuals",
    }
);
