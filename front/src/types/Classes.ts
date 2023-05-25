import { StaticImageData } from "next/image";

export interface PreviewPropsType {
    title: string;
    description: string;
    image: StaticImageData;
}

export interface SpecificationsPropsType {
    features: Array<string>;
}

export interface ClassType {
    id: number;
    name: string;
    description: string;
    engName: string;
    image: string;
}
