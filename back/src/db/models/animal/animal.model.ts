import {
    ModelDefined,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../../index";

interface animalAttributes
    extends Model<
        InferAttributes<animalAttributes>,
        InferCreationAttributes<animalAttributes>
    > {
    id?: number;
    name: string;
    engName: string;
    // class: number;
    // engClass: string;
    squad: string;
    genus: string;
    family: string;
    size: string;
    area: string;
    lifeStyle: string;
    food: string;
    human: string;
    status: string;
    lifeSpan: string;
    audioTrack: string;
    point: number;
    qrCode: string;
    icon: string;
    look: boolean | null;
    offer: boolean | null;
}

export const animal = sequelize.define<animalAttributes>(
    "animals",
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
            allowNull: false,
        },
        // class: {
        //     type: DataTypes.STRING(255),
        //     allowNull: false,
        // },
        // engClass: {
        //     type: DataTypes.STRING(255),
        //     allowNull: false,
        // },
        squad: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        genus: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        family: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        size: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        area: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lifeStyle: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        food: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        human: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lifeSpan: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        audioTrack: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        point: {
            type: DataTypes.INTEGER,
        },
        qrCode: {
            type: DataTypes.STRING(255),
        },
        icon: {
            type: DataTypes.STRING(255),
        },
        look: {
            type: DataTypes.BOOLEAN,
        },
        offer: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        tableName: "animals",
    }
);
