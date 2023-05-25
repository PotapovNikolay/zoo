import { IAnimalImages } from "./IAnimalImages";

export interface IAnimal {
    id?: number;
    name: string;
    engName: string;
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
    point: number | null;
    qrCode: string;
    animal_images: IAnimalImages[];
    classId: number;
    icon: string;
    look: boolean | null;
    offer: boolean | null;
}
