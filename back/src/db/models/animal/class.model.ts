import { DataTypes, ModelDefined } from "sequelize";
import { sequelize } from "../../index";

interface classOfAnimalAttributes {
    id: number;
    name: string;
    description: string;
    engName: string;
    image:string;
}

export const classOfAnimal: ModelDefined<classOfAnimalAttributes, "id"> =
    sequelize.define(
        "classes",
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
                allowNull: false,
            },
            engName: {
                type: DataTypes.STRING(255),
            },
            image: {
                type: DataTypes.STRING(255),
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            tableName: "classes",
        }
    );
