import { sequelize } from "../../index";
import {
    ModelDefined,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";

interface jobAttributes
    extends Model<
        InferAttributes<jobAttributes>,
        InferCreationAttributes<jobAttributes>
    > {
    id: number;
    title: string;
    description: string;
    publish: boolean;
}

export const job = sequelize.define<jobAttributes>(
    "job",
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
        publish: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        tableName: "job",
    }
);
