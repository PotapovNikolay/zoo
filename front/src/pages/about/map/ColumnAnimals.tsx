import Link from "next/link";
import { AnimalType } from "@/src/types";

interface ColumnAnimalsProps {
    animals: Array<AnimalType>;
    onClickAnimals: (id: number) => void;
}

export const ColumnAnimals: React.FC<ColumnAnimalsProps> = ({
    animals,
    onClickAnimals,
}) => {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-6">
                Животные на территории зоопарка
            </h3>
            <div className="flex flex-wrap overflow-y-scroll map-scroll h-72 ">
                {animals.map((animal, key) => {
                    return (
                        <div
                            onClick={() => {
                                onClickAnimals(animal.id!);
                            }}
                            key={key}
                            className="flex items-center cursor-pointer space-x-2 mr-2 mb-2 bg-white rounded-full px-2 py-1 text-main-blue"
                        >
                            <div className=" text-sm lg:text-base font-semibold">
                                {animal.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
