import { fetcher, dispatcher, axios } from "utils";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { Labels } from "./Labels";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Services } from "./Services";
import { Animals } from "./Animals";
import { Button, Preloader } from "components/base";
import { IAnimal } from "types/animal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MapProps {}

const iconsServices = [
    {
        icon: "/public/map/layers/icons/play_shapes_FILL0_wght400_GRAD0_opsz48.svg",
        text: "Игровая площадка",
    },
    {
        icon: "/public/map/layers/icons/fastfood_FILL0_wght400_GRAD0_opsz48.svg",
        text: "Пикник-зона",
    },
    {
        icon: "/public/map/layers/icons/theater_comedy_FILL0_wght400_GRAD0_opsz48.svg",
        text: "Сцена",
    },
    {
        icon: "/public/map/layers/icons/gate_FILL0_wght400_GRAD0_opsz48.svg",
        text: "Вход",
    },
    {
        icon: "/public/map/layers/icons/wc_FILL0_wght400_GRAD0_opsz48.svg",
        text: "Туалет",
    },
    {
        icon: "/public/map/layers/icons//store_FILL0_wght400_GRAD0_opsz48.svg",
        text: "Магазин сувениров",
    },
    {
        icon: "/public/map/layers/icons/restaurant_FILL0_wght400_GRAD0_opsz48.svg",
        text: "Фудкорт",
    },
];

export const Map: React.FC<MapProps> = () => {
    const [circle, setCircle] = useState<number | null>(null);
    const [animalId, setAnimalId] = useState<number | null>(null);
    const [animals, setAnimals] = useState<IAnimal[] | null>(null);
    const { data, error: errors, isLoading } = useSWR("/animals", fetcher);

    useEffect(() => {
        if (data) {
            setAnimals(data.animals);
        }
    }, [data]);

    const { trigger, error } = useSWRMutation("/animals", dispatcher);

    function chooseAnimal(id: number) {
        setAnimalId(id)
        onSave(id)
        // const animal = animals.find((animal) => animal.point === point);
        // setAnimal(animal);
        // setShowModal(true);
    }

    async function onSave(id?: number) {
        const entity: IAnimal = data.animals.find(
            (animal: IAnimal) => animal.id === animalId
        );

        if (id) {
            entity.point = null;
        } else {
            entity.point = circle;
        }

        const updatedAnimals: any = animals!.map((animal: IAnimal) => {
            if (animal.id === entity.id) {
                return { ...animal, ...entity };
            }
            return animal;
        });
        setAnimals(updatedAnimals);

        const res = await trigger({ entity: entity, method: "patch" });
        if (res) {
            toast(res.message);
            setAnimalId(null);
            setCircle(null);
        }
    }

    function chooseCircle(id: number) {
        setCircle(Number(id));
    }

    if (isLoading || !animals) {
        return <Preloader />;
    }

    return (
        <div className="bg-white dark:bg-gray-900 ">
            <ToastContainer />
            <div className="h-full flex justify-around items-center px-10">
                <div className=" w-3/5  h-[45rem] relative">
                    <img
                        src={"/public/map/layers/land.svg"}
                        alt={"land"}
                        className="absolute"
                    />
                    <img
                        src={"/public/map/layers/river.svg"}
                        alt={"river"}
                        className={" absolute "}
                    />
                    <img
                        src={"/public/map/layers/enclosure.svg"}
                        alt={"enclosure"}
                        className={"absolute "}
                    />
                    <Labels />
                    <img
                        src={"/public/map/layers/trees.png"}
                        alt={"trees"}
                        className={" absolute "}
                    />
                    <img
                        src={"/public/map/layers/path.svg"}
                        alt={"path"}
                        className={"absolute "}
                    />
                    <Services icons={iconsServices} />
                    <Animals
                        chooseCircle={chooseCircle}
                        chooseAnimal={chooseAnimal}
                        animals={animals}
                    />
                </div>
                <div className="py-5 px-3 h-[35rem] w-2/5 rounded-2xl  bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 my-10">
                    <div className="text-base font-normal text-gray-900  dark:text-white ">
                        <p>
                            Чтобы назначить место на карте животному выберите
                            пустой кружок
                        </p>
                        <p>
                            Чтобы удалить животное с кружка, нажмите на иконку
                            животного дважды или подтвердите действие
                        </p>
                    </div>
                    {circle && (
                        <div className="mt-4">
                            <select
                                defaultValue={"Назначить животное"}
                                onChange={(event) => {
                                    setAnimalId(Number(event.target.value));
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option>Выберите животное</option>
                                {data.animals.map(
                                    (animal: IAnimal, key: number) => {
                                        return (
                                            <option
                                                key={key}
                                                // selected={title === value ? true : false}
                                                value={animal.id}
                                            >
                                                {animal.name}
                                            </option>
                                        );
                                    }
                                )}
                            </select>
                        </div>
                    )}
                    {animalId ? (
                        <div className="mt-4">
                            <Button label="Подтвердить" submit={onSave} />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
