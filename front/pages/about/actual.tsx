import { BreadCrumbs } from "@/src/components/layout";
import Head from "next/head";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import alpake from "@images/animals/mammals/alpaka.png";
import lev from "@images/animals/mammals/lev.png";
import grif from "@images/animals/birds/grif-chernyj.png";
import piton from "@images/animals/reptiles/piton-tigrovyj.png";
import Image from "next/image";
import { LegacyRef, RefObject, useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";
import { ButtonPrimary } from "@/src/components/buttons";
import { axios } from "@/src/utils/fetcher";

const slider = [
    { img: alpake, text: "1" },
    { img: lev, text: "1" },
    { img: grif, text: "1" },
    { img: piton, text: "1" },
];

export const getStaticProps = async ({ params }: any) => {
    let response = null;

    const { data } = await axios.get(`/actuals`);

    response = data.actuals;

    if (!response) {
        return {
            notFound: true,
        };
    }

    return {
        props: { response },
    };
};

export default function Actual({ response }: any) {
    const splideRef = useRef<any>();
    const [ready, setReady] = useState<boolean>(false);
    const [curentIndexSplider, setCurentIndexSplider] = useState<number>(0);

    useEffect(() => {
        if (splideRef.current) {
            setReady(true);
        }
    }, [splideRef]);

    return (
        <div className="bg-main-blue rounded-b-2xl ">
            <Head>
                <title>Актуальное</title>
            </Head>
            <BreadCrumbs
                props={{
                    root: { path: "/about/actual", title: "Актуальное" },
                }}
            />
            <div className="flex flex-col lg:flex-row mt-10 lg:mt-0 items-center lg:space-x-6 justify-center py-8 lg:py-10 px-6 ">
                <div className=" lg:w-2/5 lg:mr-4">
                    <h2 className="text-start">
                        {response[curentIndexSplider].title}
                    </h2>
                    <h6 className="text-start">
                        {response[curentIndexSplider].description}
                    </h6>
                </div>
                <div className="block mt-6 lg:hidden">
                    <Splide
                        options={{
                            gap: "1rem",
                            arrows: true,
                            perPage: 1,
                            perMove: 1,
                            direction: "ltr",
                            pagination: true,
                            width: "22rem",
                            height: "22rem",
                            trimSpace: "move",
                            type: "loop",
                            cover: false,
                            autoplay: true,
                            speed:500,
                            interval:3000
                        }}
                        onMoved={(splide, newIndex) => {
                            setCurentIndexSplider(newIndex);
                        }}
                        aria-label="My Favorite Images"
                    >
                        {response.map((actual: any, key: number) => {
                            return (
                                <SplideSlide key={key}>
                                    <div className="rounded-2xl overflow-hidden h-[22rem] w-[22rem] z-40 relative">
                                        <Image
                                            src={`/images${actual.image}`}
                                            fill
                                            quality={100}
                                            alt="dd"
                                        />
                                    </div>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
                <div className="hidden lg:block lg:w-[35rem] lg:h-[35rem] mt-6 lg:mt-0  rounded-2xl overflow-hidden relative">
                    <Image
                        src={`/images${response[curentIndexSplider].image}`}
                        fill
                        className="object-cover"
                        quality={100}
                        alt="dd"
                    />
                </div>
                <div className="right-10 bottom-10 hidden lg:block">
                    <Splide
                        options={{
                            gap: "1rem",
                            arrows: false,
                            perPage: 3,
                            perMove: 1,
                            direction: "ttb",
                            pagination: false,
                            width: "30rem",
                            height: "30rem",
                            trimSpace: "move",
                            type: "loop",
                            cover: false,
                            // autoplay: true,
                            // speed:500,
                            // interval:2000
                        }}
                        onMoved={(splide, newIndex) => {
                            setCurentIndexSplider(newIndex);
                        }}
                        aria-label="My Favorite Images"
                    >
                        {response.map((actual: any, key: number) => {
                            if (actual.active) {
                                return (
                                    <SplideSlide>
                                        <div className="rounded-2xl overflow-hidden h-36 w-36 z-40 relative">
                                            <Image
                                                src={`/images${actual.image}`}
                                                fill
                                                quality={100}
                                                alt="dd"
                                            />
                                        </div>
                                    </SplideSlide>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </Splide>
                </div>
            </div>

            {/* <div className="h-8 bg-main-blue w-full rounded-b-2xl text-main-blue"></div> */}
        </div>
    );
}
