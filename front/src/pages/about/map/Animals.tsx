import { RefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReady, useCoords, coordsType } from "@/src/hooks";
import { AnimalType } from "@/src/types";

interface pointProps {
    index: number;
    windowWidth: number;
    animalsRef: RefObject<SVGSVGElement>;
    animal: AnimalType;
    onClick: (point: number) => void;
}

const Point: React.FC<pointProps> = ({
    animalsRef,
    index,
    windowWidth,
    animal,
    onClick,
}) => {
    const [coords, setCoords] = useState<coordsType>({ top: 0, left: 0 });

    useEffect(() => {
        const { left, top } = useCoords(animalsRef, index);
        setCoords({ left, top });
    }, [animalsRef, windowWidth]);

    return (
        <div
            onClick={() => onClick(animal.point!)}
            style={{ left: coords.left, top: coords.top }}
            className={
                "w-4 h-4 lg:w-7 lg:h-7  bg-white rounded-full shadow-2xl absolute z-40 cursor-pointer transition-all duration-200 hover:scale-110 "
            }
        >
            <Image
                fill
                src={`/map/${animal.icon}`}
                alt={`${animal.name}`}
                className={"p-0.5 lg:p-1"}
                sizes="(max-width: 768px) 100vw"
            />
        </div>
    );
};



interface animalsProps {
    animals: Array<AnimalType>;
    onClick: (point: number) => void;
}

export const Animals: React.FC<animalsProps> = ({ animals, onClick }) => {
    const animalsRef = useRef<SVGSVGElement>(null);

    const { ready, width } = useReady(animalsRef);

    return (
        <div>
            {ready &&
                animals &&
                animals.map((animal: any, key: number) => {
                    if (animal.point) {
                        return (
                            <Point
                                onClick={onClick}
                                animal={animal}
                                windowWidth={width}
                                key={key}
                                index={animal.point}
                                animalsRef={animalsRef}
                            />
                        );
                    } else {
                        return null;
                    }
                })}

            <svg
                ref={animalsRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2144 2177"
                className={"z-30 absolute inset-0  w-full h-full" + ` `}
            >
                <path
                    id="0"
                    className="circle-orange"
                    d="M535,1125.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,535,1125.16Z"
                />
                <path
                    id="1"
                    className="circle-orange"
                    d="M523,1026.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,523,1026.16Z"
                />
                <path
                    id="2"
                    className="circle-orange"
                    d="M638,1009.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,638,1009.16Z"
                />
                <path
                    id="3"
                    className="circle-orange"
                    d="M517,779.156a39.381,39.381,0,1,1-39.38,39.38A39.38,39.38,0,0,1,517,779.156Z"
                />
                <path
                    id="4"
                    className="circle-orange"
                    d="M520,670.156a39.381,39.381,0,1,1-39.38,39.38A39.38,39.38,0,0,1,520,670.156Z"
                />
                <path
                    id="5"
                    className="circle-orange"
                    d="M573,511.156a39.381,39.381,0,1,1-39.38,39.38A39.38,39.38,0,0,1,573,511.156Z"
                />
                <path
                    id="6"
                    className="circle-orange"
                    d="M682,528.156a39.381,39.381,0,1,1-39.38,39.38A39.38,39.38,0,0,1,682,528.156Z"
                />
                <path
                    id="7"
                    className="circle-orange"
                    d="M794,484.156a39.381,39.381,0,1,1-39.38,39.38A39.38,39.38,0,0,1,794,484.156Z"
                />
                <path
                    id="8"
                    className="circle-orange"
                    d="M1272,740.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1272,740.156Z"
                />
                <path
                    id="9"
                    className="circle-orange"
                    d="M1355,795.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1355,795.156Z"
                />
                <path
                    id="10"
                    className="circle-orange"
                    d="M710,432.156a39.381,39.381,0,1,1-39.38,39.38A39.38,39.38,0,0,1,710,432.156Z"
                />
                <path
                    id="11"
                    className="circle-orange"
                    d="M837,656.156a39.381,39.381,0,1,1-39.38,39.38A39.38,39.38,0,0,1,837,656.156Z"
                />
                <path
                    id="12"
                    className="circle-orange"
                    d="M943,442.156a39.381,39.381,0,1,1-39.38,39.38A39.38,39.38,0,0,1,943,442.156Z"
                />
                <path
                    id="13"
                    className="circle-orange"
                    d="M1093,436.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1093,436.156Z"
                />
                <path
                    id="14"
                    className="circle-orange"
                    d="M1144,329.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1144,329.156Z"
                />
                <path
                    id="15"
                    className="circle-orange"
                    d="M1293,244.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1293,244.156Z"
                />
                <path
                    id="16"
                    className="circle-orange"
                    d="M1387,195.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1387,195.156Z"
                />
                <path
                    id="17"
                    className="circle-orange"
                    d="M1450,274.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1450,274.156Z"
                />
                <path
                    id="18"
                    className="circle-orange"
                    d="M1551,240.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1551,240.156Z"
                />
                <path
                    id="19"
                    className="circle-orange"
                    d="M1646,299.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1646,299.156Z"
                />
                <path
                    id="20"
                    className="circle-orange"
                    d="M1593,379.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1593,379.156Z"
                />
                <path
                    id="21"
                    className="circle-orange"
                    d="M1732,365.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1732,365.156Z"
                />
                <path
                    id="22"
                    className="circle-orange"
                    d="M1279,482.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1279,482.156Z"
                />
                <path
                    id="23"
                    className="circle-orange"
                    d="M1359,412.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1359,412.156Z"
                />
                <path
                    id="24"
                    className="circle-orange"
                    d="M1457,523.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1457,523.156Z"
                />
                <path
                    id="25"
                    className="circle-orange"
                    d="M1317,596.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1317,596.156Z"
                />
                <path
                    id="26"
                    className="circle-orange"
                    d="M1411,652.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1411,652.156Z"
                />
                <path
                    id="27"
                    className="circle-orange"
                    d="M1511,690.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1511,690.156Z"
                />
                <path
                    id="28"
                    className="circle-orange"
                    d="M1650,516.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1650,516.156Z"
                />
                <path
                    id="29"
                    className="circle-orange"
                    d="M1765,518.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1765,518.156Z"
                />
                <path
                    id="30"
                    className="circle-orange"
                    d="M1669,626.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1669,626.156Z"
                />
                <path
                    id="31"
                    className="circle-orange"
                    d="M1775,627.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1775,627.156Z"
                />
                <path
                    id="32"
                    className="circle-orange"
                    d="M1691,773.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1691,773.156Z"
                />
                <path
                    id="33"
                    className="circle-orange"
                    d="M1755,880.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1755,880.156Z"
                />
                <path
                    id="34"
                    className="circle-orange"
                    d="M1634,926.156a39.382,39.382,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1634,926.156Z"
                />
                <path
                    id="35"
                    className="circle-orange"
                    d="M1669,1025.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1669,1025.16Z"
                />
                <path
                    id="36"
                    className="circle-orange"
                    d="M1545,1024.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1545,1024.16Z"
                />
                <path
                    id="37"
                    className="circle-orange"
                    d="M1568,1134.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1568,1134.16Z"
                />
                <path
                    id="38"
                    className="circle-orange"
                    d="M1455,1151.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1455,1151.16Z"
                />
                <path
                    id="39"
                    className="circle-orange"
                    d="M1413,1259.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1413,1259.16Z"
                />
                <path
                    id="40"
                    className="circle-orange"
                    d="M1293,1262.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1293,1262.16Z"
                />
                <path
                    id="41"
                    className="circle-orange"
                    d="M1323,1363.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1323,1363.16Z"
                />
                <path
                    id="42"
                    className="circle-orange"
                    d="M1226,1439.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1226,1439.16Z"
                />
                <path
                    id="43"
                    className="circle-orange"
                    d="M977,795.156a39.381,39.381,0,1,1-39.38,39.38A39.382,39.382,0,0,1,977,795.156Z"
                />
                <path
                    id="44"
                    className="circle-orange"
                    d="M1019,881.156a39.381,39.381,0,1,1-39.383,39.38A39.379,39.379,0,0,1,1019,881.156Z"
                />
                <path
                    id="45"
                    className="circle-orange"
                    d="M1121,895.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1121,895.156Z"
                />
                <path
                    id="46"
                    className="circle-orange"
                    d="M886,1013.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,886,1013.16Z"
                />
                <path
                    id="47"
                    className="circle-orange"
                    d="M990,1048.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,990,1048.16Z"
                />
                <path
                    id="48"
                    className="circle-orange"
                    d="M949,1216.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,949,1216.16Z"
                />
                <path
                    id="49"
                    className="circle-orange"
                    d="M1064,1213.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1064,1213.16Z"
                />
                <path
                    id="50"
                    className="circle-orange"
                    d="M658,1408.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,658,1408.16Z"
                />
                <path
                    id="51"
                    className="circle-orange"
                    d="M707,1493.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,707,1493.16Z"
                />
                <path
                    id="52"
                    className="circle-orange"
                    d="M787,1620.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,787,1620.16Z"
                />
                <path
                    id="53"
                    className="circle-orange"
                    d="M912,1639.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,912,1639.16Z"
                />
                <path
                    id="54"
                    className="circle-orange"
                    d="M1036,1632.16a39.38,39.38,0,1,1-39.383,39.38A39.379,39.379,0,0,1,1036,1632.16Z"
                />
                <path
                    id="55"
                    className="circle-orange"
                    d="M1138,1593.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1138,1593.16Z"
                />
                <path
                    id="56"
                    className="circle-orange"
                    d="M832,1725.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,832,1725.16Z"
                />
                <path
                    id="57"
                    className="circle-orange"
                    d="M977,1740.16a39.38,39.38,0,1,1-39.38,39.38A39.381,39.381,0,0,1,977,1740.16Z"
                />
                <path
                    id="58"
                    className="circle-orange"
                    d="M1125,1710.16a39.38,39.38,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1125,1710.16Z"
                />
            </svg>
        </div>
    );
};
