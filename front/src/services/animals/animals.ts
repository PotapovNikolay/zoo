import { AnimalType } from "@types";
import { fetcher } from "@fetcher";
import useSWR from "swr";

interface getAnimalsProps {
    data: AnimalType[];
    error: string;
    isLoading: boolean;
}

export function getAnimals(): getAnimalsProps {
    const { data, error, isLoading } = useSWR("animals", fetcher);

    console.log(data, error, isLoading);

    return { data, error, isLoading };
}

interface getAnimalProps {
    data: AnimalType[];
    error: string;
    isLoading: boolean;
}

export function getAnimal(animal: string): getAnimalProps {
    const { data, error, isLoading } = useSWR(`animals/${animal}`, fetcher);

    console.log(data, error, isLoading);

    return { data, error, isLoading };
}
