import { MutableRefObject, useEffect, useRef, useState } from "react";

import Image from "next/image";
import { useReady, useCoords, coordsType } from "@/src/hooks";

interface pointProps {
    index: number;
    windowWidth: number;
    services: MutableRefObject<SVGSVGElement | null>;
    icon: any;
}

const Point: React.FC<pointProps> = ({
    services,
    index,
    windowWidth,
    icon,
}) => {
    const [coords, setCoords] = useState<coordsType>({ top: 0, left: 0 });

    useEffect(() => {
        const { left, top } = useCoords(services, index);
        setCoords({ left, top });
    }, [services, windowWidth]);

    return (
        <div
            style={{ left: coords.left, top: coords.top }}
            className={
                "w-4 h-4 lg:w-7 lg:h-7 bg-main-orange rounded-full shadow-2xl absolute z-40 cursor-pointer transition-all duration-200 hover:scale-110 "
            }
        >
            <Image fill src={icon} alt={`${icon}`} className={"p-0.5 lg:p-1.5"} />
        </div>
    );
};

interface icon {
    icon: typeof import("*.svg");
    text: string;
}

interface servicesProps {

    icons: Array<icon>;
}

export const Services: React.FC<servicesProps> = ({  icons }) => {
    const services = useRef<SVGSVGElement>(null);

    const { ready, width } = useReady(services);

    return (
        <div className={"  "}>
            {ready
                ? icons.map(({ icon }, key) => {
                      return (
                          <Point
                              icon={icon}
                              windowWidth={width}
                              key={key}
                              index={key}
                              services={services}
                          />
                      );
                  })
                : null}

            <svg
                ref={services}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2144 2177"
                className={"z-30 absolute inset-0  w-full h-full" + ` `}
            >
                <path
                    id="playground"
                    data-name="Эллипс 1"
                    className="circle-orange"
                    d="M1318,916.156a39.381,39.381,0,1,1-39.38,39.38A39.379,39.379,0,0,1,1318,916.156Z"
                />
                <path
                    id="food"
                    data-name="Эллипс 1 копия 2"
                    className="circle-orange"
                    d="M808,1213.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,808,1213.16Z"
                />
                <path
                    id="scene"
                    data-name="Эллипс 1 копия 3"
                    className="circle-orange"
                    d="M923,1441.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,923,1441.16Z"
                />
                <path
                    id="entry"
                    data-name="Эллипс 1 копия 4"
                    className="circle-orange"
                    d="M439,1536.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,439,1536.16Z"
                />
                <path
                    id="wc"
                    data-name="Эллипс 1 копия 5"
                    className="circle-orange"
                    d="M489,1257.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,489,1257.16Z"
                />
                <path
                    id="store"
                    data-name="Эллипс 1 копия 6"
                    className="circle-orange"
                    d="M339,1311.16a39.38,39.38,0,1,1-39.38,39.38A39.38,39.38,0,0,1,339,1311.16Z"
                />
                <path
                    id="foodcourt"
                    data-name="Эллипс 1 копия"
                    className="circle-orange"
                    d="M765,929.156a39.382,39.382,0,1,1-39.38,39.38A39.38,39.38,0,0,1,765,929.156Z"
                />
            </svg>

            {/* <div
                className={
                    `absolute top-[${() => child.getBBox().y }px] left-[${() =>
                        child.getBBox().x }px]` +
                    " w-10 h-10 bg-black rounded-full"
                }
            ></div> */}
        </div>
    );
};
