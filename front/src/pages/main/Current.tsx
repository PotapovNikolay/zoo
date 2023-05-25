import { ButtonPrimary } from "@/src/components/buttons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import { useRef, useState } from "react";
import { leto, night, dr, ptici } from "@/public/images/actuals";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/src/utils/fetcher";

interface CurrentProps {}

export const Current: React.FC<CurrentProps> = () => {
    const { data, isLoading } = useSWR("/actuals/", fetcher);

    const spliderRef = useRef(null);
    const [curentIndexSplider, setCurentIndexSplider] = useState<number>(0);

    const slides: Array<number> = [0, 1, 2, 3, 4];
    const router = useRouter();

    function toActual(event: React.MouseEvent) {
        router.push("/about/actual");
    }

    return (
        <div className="flex flex-col lg:flex-row items-stretch overflow-hidden bg-main-blue pt-10 lg:pt-24 ">
            <div className="lg:px-32 flex flex-col justify-around items-center py-10">
                <div className="flex flex-col items-center lg:block  ">
                    <h2 className="text-white">АКТУАЛЬНОЕ</h2>
                    <h6>
                        Здесь собраны акции и мероприятия,
                        <br /> которые проходят в нашем зоопарке
                    </h6>

                    <div className="mt-6 lg:mt-10">
                        <ButtonPrimary type="button-orange" onClick={toActual}>
                            Подробнее
                        </ButtonPrimary>
                    </div>
                </div>

                <div className="hidden lg:flex space-x-2 ">
                    {slides.map((slide, key: number) =>
                        slide === curentIndexSplider ? (
                            <div
                                key={key}
                                className="h-2.5 w-24 bg-white rounded-full"
                            />
                        ) : (
                            <div
                                key={key}
                                className="h-2.5 w-2.5 bg-white rounded-full"
                            />
                        )
                    )}
                </div>
            </div>

            <Splide
                ref={spliderRef}
                aria-label="My Favorite Images"
                options={{
                    arrows: false,
                    width: "72rem",
                    breakpoints: {
                        640: {
                            perPage: 1,
                            width: "72rem",
                        },
                        2000: {
                            perPage: 2,
                            width: "72rem",
                        },
                    },
                }}
                onMoved={(splide, newIndex) => {
                    setCurentIndexSplider(newIndex);
                }}
            >
                {data &&
                    data.actuals.map((actual: any, key: number) => {

                        if (actual.active) {
                            return (
                                <SplideSlide key={key}>
                                    <div className="h-[25rem] xl:h-[30rem] lg:w-[34rem] mx-4 xl:mx-0 bg-white text-main-blue rounded-[1.5rem] flex flex-col p-2.5 ">
                                        <div className="bg-blue-200 w-full h-full rounded-2xl rounded-b-none self-center relative overflow-hidden">
                                            <Image
                                                src={`/images${actual.image}`}
                                                width={1000}
                                                height={1000}
                                                quality={100}
                                                alt="leto"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-7 pb-2 pt-4">
                                            <div className="flex flex-col ">
                                                <div className="font-bold text-xl ">
                                                    {actual.title}
                                                </div>
                                                <div className=" text-md">
                                                    {actual.description.slice(
                                                        0,
                                                        30
                                                    )}
                                                    ...
                                                </div>
                                            </div>
                                            <div className="hidden xl:block text-white scale-90 ">
                                                <ButtonPrimary
                                                    type="button-orange"
                                                    onClick={toActual}
                                                >
                                                    Подробнее
                                                </ButtonPrimary>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            );
                        } else {
                            return null;
                        }

                        
                    })}

                {/* <SplideSlide></SplideSlide> */}
            </Splide>
        </div>
    );
};
