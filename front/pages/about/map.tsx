import Head from "next/head";
import Image from "next/image";
import {
    food,
    entry,
    playground,
    foodcourt,
    signpost,
    store,
    scene,
    wc,
} from "@map/layers/icons";

import { path, enclosure, trees, land, services, river } from "@map/layers";
import { useRef, useState } from "react";
import { Services } from "@/src/pages/about/map";
import { Animals } from "@/src/pages/about/map/Animals";
import { Labels } from "@/src/pages/about/map/Labels";
import { axios, fetcher } from "@/src/utils/fetcher";
import { AnimalType, ClassType } from "@/src/types";
import { ColumnService } from "@/src/pages/about/map/ColumnService";
import { ColumnAnimals } from "@/src/pages/about/map/ColumnAnimals";
import { Modal } from "@/src/pages/about/map/Modal";
import { useRouter } from "next/router";

const iconsServices = [
    { icon: playground, text: "Игровая площадка" },
    { icon: food, text: "Пикник-зона" },
    { icon: scene, text: "Сцена" },
    { icon: entry, text: "Вход" },
    { icon: wc, text: "Туалет" },
    { icon: store, text: "Магазин сувениров" },
    { icon: foodcourt, text: "Фудкорт" },
];

interface axiosAnimalsType {
    animals: Array<AnimalType>;
    success: boolean;
}

export async function getStaticProps() {
    const {
        data: { animals },
    } = await axios.get<axiosAnimalsType>("/animals");

    const {
        data: { classes },
    } = await axios.get("/classes");

    return {
        props: {
            animals,
            classes,
        },
    };
}

interface AnimalTypeWithClass extends AnimalType {
    className: string;
}

export default function Map({
    animals,
    classes,
}: {
    animals: AnimalType[];
    classes: ClassType[];
}) {
    const [showModal, setShowModal] = useState<Boolean>(false);
    const [animal, setAnimal] = useState<AnimalTypeWithClass>();

    const router = useRouter();

    function onClickAnimals(point: number) {
        const animal = animals.find((animal) => animal.point === point);

        const classOfAnimal = classes.find(
            (clas) => clas.id === animal!.classId
        );

        const newAnimal: any = { ...animal, className: classOfAnimal!.engName };

        setAnimal(newAnimal);

        if (Number(document.documentElement.clientWidth) < 1024) {
            router.push(`/animals/${newAnimal.className}/${newAnimal.engName}`);
        } else {
            setShowModal(true);
        }
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <div className="bg-main-blue rounded-b-2xl pb-6">
            <Head>
                <title>Интерактивная карта</title>
            </Head>
            <h2 className="text-center pt-14">Интерактивная карта</h2>
            <div className="bg-main-blue  full flex flex-col lg:flex-row justify-around  lg:h-[45rem] px-6 lg:px-10">
                <div className=" w-full relative h-[20rem] lg:h-full ">
                    <Image src={land} fill alt={"land"} className=" z-0" />
                    <Image src={river} fill alt={"river"} className={" "} />
                    <Image
                        src={enclosure}
                        fill
                        alt={"enclosure"}
                        className={" "}
                    />
                    <Labels />
                    <Image
                        src={trees}
                        fill
                        alt={"trees"}
                        className={" object-contain"}
                    />
                    <Image src={path} fill alt={"path"} className={""} />
                    <Services icons={iconsServices} />
                    <Animals onClick={onClickAnimals} animals={animals} />
                </div>
                {showModal && animal ? (
                    <div className=" pt-20 w-3/5 pb-10 relative">
                        <Modal closeModal={closeModal} animal={animal} />
                    </div>
                ) : (
                    <div className="flex flex-col   lg:pt-20 lg:w-3/5 space-y-6 lg:space-y-10">
                        <ColumnService icons={iconsServices} />
                        <ColumnAnimals
                            onClickAnimals={onClickAnimals}
                            animals={animals}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
