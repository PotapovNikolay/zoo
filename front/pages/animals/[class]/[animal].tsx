import Image from "next/image";
import {
    arrowBlue,
    clipboard,
    rulers,
    play,
    person,
    heart,
    geo,
    menu,
    info,
    book,
    pause,
} from "@/public/icons/pages/animal/animal";
import qr from "@images/another/qrcode.png";
import { BreadCrumbs } from "@components/layout";
import { AnimalType, ClassType } from "@types";
import { axios, baseURL } from "@fetcher";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

interface axiosAnimalType {
    animal: AnimalType;
    success: boolean;
}

export const getStaticProps = async (context: any) => {
    let response: AnimalType | undefined;

    if (context.params) {
        const { data } = await axios.get<axiosAnimalType>(
            `/animals/${context.params.animal}`
        );

        response = data.animal;
    }

    if (!response) {
        return {
            notFound: true,
        };
    }

    return {
        props: { response },
    };
};

interface axiosClassesType {
    animals: AnimalType[];
    success: boolean;
}

export const getStaticPaths = async () => {
    const {
        data: { animals },
    } = await axios.get("/animals");
    const {
        data: { classes },
    } = await axios.get(`/classes`);

    return {
        paths: animals.map((item: AnimalType) => {
            return {
                params: {
                    class: classes.find(
                        (clas: ClassType) => clas.id === item.classId
                    ).engName,
                    animal: item.engName,
                },
            };
        }),
        fallback: false,
    };
};

const classes = [
    { slug: "mammals", title: "Млекопитающие" },
    { slug: "reptiles", title: "Рептилии" },
    { slug: "birds", title: "Птицы" },
];

export default function Animal({ response }: any) {
    const heightOfImage = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState<boolean>(false);
    const router = useRouter();

    function playAudio() {
        if (audioRef.current) {
            playing ? audioRef.current.pause() : audioRef.current.play();
            playing ? setPlaying(false) : setPlaying(true);
        }
    }

    return (
        <div className="bg-main-gray px-4 lg:px-40 pt-8 mt-4 lg:mt-0">
            <audio ref={audioRef} onEnded={() => setPlaying(false)}>
                <source
                    src={"/audio/" + response.audioTrack}
                    type="audio/mp3"
                />
                Your browser does not support the audio element.
            </audio>
            <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-2 gap-x-4">
                    <div className="flex flex-col justify-center">
                        <BreadCrumbs
                            bg="gray"
                            props={{
                                root: { path: "/animals", title: "Животные" },
                                parent: {
                                    path: `/animals/${router.query.class}`,
                                    title: classes.find(
                                        (clas) =>
                                            clas.slug === router.query.class
                                    )!.title,
                                },
                                current: {
                                    path: `/animals/${router.query.class}/${response.engName}`,
                                    title: response.name,
                                },
                            }}
                        />
                    </div>

                    <button className="text-xl  text-left rounded-full basis-1/2 relative flex items-center">
                        {/* <span>Перейти к расписанию кормлений</span>
                        <span className=" p-1.5 absolute right-2 bg-white rounded-full">
                            <Image
                                src={arrowBlue}
                                alt="arrowBlue"
                                width={24}
                                height={24}
                            />
                        </span> */}
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4  ">
                    <div
                        ref={heightOfImage}
                        className="flex flex-col space-y-4 "
                    >
                        <div className="bg-main-blue rounded-xl p-6 lg:p-8 relative">
                            <h3 className="text-2xl lg:text-4xl font-bold">
                                {response.name}
                            </h3>
                            <div className="flex justify-between w-full items-center ">
                                <div className="flex flex-col space-y-1 lg:space-y-2 ">
                                    <h6 className="text-start">
                                        Отряд: {response.squad}
                                    </h6>
                                    <h6 className="text-start">
                                        Ряд: {response.genus}
                                    </h6>
                                    <h6 className="text-start">
                                        Семество: {response.family}
                                    </h6>
                                </div>

                                <Image
                                    src={qr}
                                    alt="qr"
                                    className="invert p-0 "
                                    width={100}
                                    height={100}
                                    quality={100}
                                />
                            </div>
                            <Image
                                src={clipboard}
                                alt="clipboard"
                                width={24}
                                height={24}
                                className="absolute top-8 right-8"
                            />
                        </div>
                        <div className="flex space-x-4">
                            <div className="bg-main-blue rounded-xl p-6 lg:p-8 relative ">
                                <div className="text-2xl font-bold">Размер</div>
                                <Image
                                    src={rulers}
                                    alt="rulers"
                                    width={24}
                                    height={24}
                                    className="absolute top-8 right-8"
                                />
                                <h6 className="text-start">{response.size}</h6>
                            </div>
                            {/* <div className="bg-main-blue rounded-xl flex flex-col justify-center items-center w-full">
                                <Image
                                    src={qr}
                                    alt="qr"
                                    className="invert"
                                    style={{ objectFit: "cover" }}
                                    quality={100}
                                />

                            </div> */}
                        </div>
                    </div>
                    <div className="overflow-hidden  bg-white rounded-xl relative ">
                        <Image
                            src={`/images/${response.animal_images[0].path}`}
                            alt="yak"
                            fill={true}
                            className=" rouned-xl  object-cover "
                            quality={100}
                        />
                    </div>
                </div>
                <button
                    onClick={() => playAudio()}
                    className="lg:text-2xl p-4  bg-gradient-to-r from-[#fe9c64] to-[#fe804c] rounded-full  relative flex justify-center items-center cursor-pointer"
                >
                    <span>Аудиоинформация о животном</span>
                    <span
                        className={
                            " p-1.5 absolute right-2.5 bg-white rounded-full flex justify-center lg:translate-x-0.5"
                        }
                    >
                        <Image
                            src={playing ? pause : play}
                            alt="play"
                            className={
                                "w-6 h-6 lg:h-10 lg:w-10  lg:translate-x-0.5"
                            }
                        />
                    </span>
                </button>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0  lg:space-x-4">
                    <div className="bg-main-green rounded-xl relative p-8">
                        <div className="flex justify-between items-center space-x-4">
                            <div className="text-2xl font-bold ">
                                Распространение и среда обитания
                            </div>
                            <div className="relative w-10 h-10 lg:w-7 lg:h-7">
                                <Image src={geo} alt="geo" fill />
                            </div>
                        </div>
                        <h6 className="text-start">{response.area}</h6>
                    </div>
                    <div className="bg-main-blue rounded-xl relative p-8">
                        <div className="flex justify-between items-center space-x-4">
                            <div className="text-2xl font-bold">
                                Образ жизни
                            </div>
                            <div className="relative w-6 h-6">
                                <Image src={heart} alt="heart" fill />
                            </div>
                        </div>
                        <h6 className="text-start">{response.lifeStyle}</h6>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    <div className="bg-main-blue rounded-xl relative p-8">
                        <div className="flex justify-between space-x-4">
                            <div className="text-2xl font-bold">Питание</div>
                            <div className="relative w-8 h-8">
                                <Image src={menu} alt="menu" fill />
                            </div>
                        </div>
                        <h6 className="text-start">{response.food}</h6>
                    </div>
                    <div className="bg-main-blue rounded-xl relative p-8">
                        <div className="flex justify-between space-x-4">
                            <div className="text-2xl font-bold">
                                Вид и человек
                            </div>
                            <div className="relative w-8 h-8">
                                <Image
                                    src={person}
                                    alt="person"
                                    fill
                                    className="absolute top-8 right-8"
                                />
                            </div>
                        </div>
                        <h6 className="text-start">{response.human}</h6>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    <div className="bg-second-orange rounded-xl relative p-8">
                        <div className="flex justify-between space-x-4">
                            <div className="text-2xl font-bold">
                                Природоохранный статус вида
                            </div>
                            <div className="relative w-8 h-8 lg:w-7 lg:h-7">
                                <Image src={book} alt="book" fill />
                            </div>
                        </div>
                        <h6 className="text-start">{response.status}</h6>
                    </div>
                    {/* <div className="bg-white overflow-hidden rounded-xl relative w-full">
                        <Image src={yak2} alt="yak2" className=" h-full" />
                    </div> */}
                    <div className="bg-main-blue rounded-xl relative p-8 w-full">
                        <div className="flex justify-between space-x-4">
                            <div className="text-2xl font-bold">
                                Продолжительность жизни
                            </div>
                            <div className="relative w-10 h-10 lg:w-8 lg:h-8">
                                <Image src={info} alt="info" fill />
                            </div>
                        </div>
                        <h6 className="text-start">{response.lifeSpan}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
