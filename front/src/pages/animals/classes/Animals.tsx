import { AnimalType } from "@/src/types";
import Image, { StaticImageData } from "next/image";
import bookmarkStarFill from "@icons/bookmarkStarFill.svg";
import Link from "next/link";
import { useRouter } from "next/router";

interface AnimalsProps {
    animals: AnimalType[];
}

export const Animals: React.FC<AnimalsProps> = ({ animals}) => {

    const router = useRouter();

    return (
        <div className="bg-main-gray px-6 lg:px-16  text-main-blue ">
            <div className="flex space-x-4 lg:space-x-10 ">
                <Image
                    src={bookmarkStarFill}
                    alt={"bookmarkStarFill"}
                    width={40}
                />
                <h4 className="text-4xl  font-bold">Животные</h4>
            </div>

            <div className="flex flex-wrap pt-6 text-lg lg:w-4/5">
                {animals.map((animal, key) => {
                    return (
                        <Link
                            href={`/animals/${router.query.class}/${animal.engName}`}
                            key={key}
                            className="block cursor-pointer transition-colors duration-200 hover:text-main-orange mr-4"
                        >
                            {animal.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
