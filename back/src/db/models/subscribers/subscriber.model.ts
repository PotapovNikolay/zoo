import { sequelize } from "../../index";
import { ModelDefined, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

interface subscriberAttributes
    extends Model<
        InferAttributes<subscriberAttributes>,
        InferCreationAttributes<subscriberAttributes>
    > {
    id?: number;
    mail: string;
}

export const subscriber = sequelize.define<subscriberAttributes>(
    "subscribers",
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },

        mail: {
            type: DataTypes.STRING(255),
        },
    },
    {
        tableName: "subscribers",
    }
);
