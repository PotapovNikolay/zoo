import { DataTypes, ModelDefined } from "sequelize";
import { sequelize } from "../../index";

interface featuresOfAnimalAttributes {
    id: number;
    feature: string;
}

export const featuresOfAnimal: ModelDefined<featuresOfAnimalAttributes, "id"> =
    sequelize.define(
        "class_features",
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
            },
            feature: {
                type: DataTypes.TEXT,
            },
        },
        {
            tableName: "class_features",
        }
    );
