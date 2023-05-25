import Image from "next/image";
import { useRef, useState } from "react";
import { AnimalType } from "@/src/types";

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
import Link from "next/link";

interface ModalProps {
    animal: AnimalType;
    closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({ animal, closeModal }) => {

    const [playing, setPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    function playAudio() {
        if (audioRef.current) {
            playing ? audioRef.current.pause() : audioRef.current.play();
            playing ? setPlaying(false) : setPlaying(true);
        }
    }

    return (
        <div className="w-full  px-4 pb-6 pt-2 bg-white text-white rounded-xl relative flex flex-col space-y-4 ">
            <audio ref={audioRef} onEnded={() => setPlaying(false)}>
                <source src={"/audio/" + animal.audioTrack} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <button
                onClick={closeModal}
                className="absolute -top-2 right-4 text-black cursor-pointer"
            >
                x
            </button>

            <div className="flex space-x-4 items-center pt-4">
                <div className="bg-main-blue rounded-xl p-4 px-6 relative grow self-stretch">
                    <h3 className="text-xl font-bold">{animal.name}</h3>
                    <div className="flex justify-between  items-center mt-1">
                        <div className="flex flex-col ">
                            <h5 className="">Отряд: {animal.squad}</h5>
                            <h5 className="">Ряд: {animal.genus}</h5>
                            <h5 className="break-normal">
                                Семество: {animal.family}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden shrink-0 rounded-xl relative w-36 h-36 ">
                    <Image
                        src={`/images/${animal.animal_images[0].path}`}
                        alt="image"
                        fill
                        className=" rouned-xl object-cover "
                        quality={100}
                    />
                </div>
            </div>

            <div
                onClick={() => playAudio()}
                className=" p-3 pl-6 shrink w-full bg-gradient-to-r  from-[#fe9c64] to-[#fe804c] rounded-full relative flex items-center cursor-pointer"
            >
                <h3 className="text-xl font-bold">
                    Послушать информацию о животном
                </h3>
                <div
                    className={
                        " p-1.5  bg-white rounded-full flex   absolute right-2 "
                    }
                >
                    <Image
                        src={playing ? pause : play}
                        alt="play"
                        width={25}
                        height={25}
                        className={"translate-x-0.5"}
                    />
                </div>
            </div>

            <div className="flex space-x-4">
                <div className="bg-main-blue rounded-xl p-4 px-6 relative ">
                    <h3 className="text-xl font-bold"> Образ жизни</h3>

                    <h5 className="mt-1">{animal.lifeStyle}</h5>
                </div>
            </div>

            <Link
                href={`/animals`}
                className="text-xl p-3 pl-6 text-left bg-main-blue rounded-full  relative flex items-center"
            >
                <h3 className="text-xl font-bold text-center">
                    Нажми, чтобы узнать больше!
                </h3>
                <span className=" p-1.5 absolute right-2 bg-white rounded-full ">
                    <Image
                        src={arrowBlue}
                        alt="arrowBlue"
                        width={24}
                        height={24}
                    />
                </span>
            </Link>
        </div>
    );
};
