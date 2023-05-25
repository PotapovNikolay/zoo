import { DataTypes, ModelDefined } from "sequelize";
import { sequelize } from "../../index";

interface imagesOfAnimalAttributes {
    id: number;
    path: string;
}

export const imagesOfAnimal: ModelDefined<imagesOfAnimalAttributes, "id"> =
    sequelize.define(
        "animal_images",
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
            },
            path: {
                type: DataTypes.STRING(255),
            },
        },
        {
            tableName: "animal_images",
        }
    );
