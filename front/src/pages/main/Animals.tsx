import { ButtonPrimary } from "@/src/components/buttons";
import Image from "next/image";
import fig1 from "@images/figures/reptile.png";
import fig2 from "@images/figures/mammals.png";
import fig3 from "@images/figures/fig3.png";
import fig4 from "@images/figures/birds.png";
import { useRouter } from "next/router";
import Link from "next/link";

interface AnimalsProps {}

export const Animals: React.FC<AnimalsProps> = () => {
    const router = useRouter();

    function clickAnimals(event: React.MouseEvent) {
        router.push("/animals");
    }

    return (
        <div className="flex flex-col lg:flex-row lg:ml-20 mt-32 lg:mt-56 px-10 lg:px-0 space-x-10 items-center">
            <div className="text-main-blue lg:pl-32 lg:basis-1/3">
                <h2>ЖИВОТНЫЕ</h2>

                <h6>
                    Современный зоопарк - место, где сохраняют и размножают
                    редки и исчезающие виды животных, и мы, надеемся, что люди
                    приходящие сюда, всегда будут помнить и бережно относиться к
                    питомцам
                </h6>

                <div className="text-white mt-6 lg:mt-10 flex justify-center lg:block">
                    <ButtonPrimary type="button-orange" onClick={clickAnimals}>
                        Подробнее
                    </ButtonPrimary>
                </div>
            </div>
            <div className="hidden lg:flex items-center  h-[20rem] space-x-4">
                <div className="flex flex-col justify-between items-end   h-[20rem]">
                    <div className="rounded-xl w-52 -translate-y-2  bg-animals-fig1 overflow-hidden">
                        <Image
                            src={fig1}
                            // fill
                            style={{
                                objectFit: "cover",
                            }}
                            quality={100}
                            alt="fig1"
                        />
                    </div>
                    <div className="row-start-2  w-44 rounded-xl  overflow-hidden">
                        <Image
                            src={fig2}
                            // fill
                            style={{
                                objectFit: "cover",
                            }}
                            quality={100}
                            alt="fig2"
                        />
                    </div>
                </div>
                <div>
                    <Link
                        href={"/animals/birds"}
                        className=" rounded-xl  h-[20rem] w-[25rem] overflow-hidden flex justify-end relative"
                    >
                        <Image
                            src={fig4}
                            style={{
                                objectFit: "cover",
                            }}
                            quality={100}
                            alt="fig4"
                        />
                        {/* <div className="flex flex-col space-y-6 items-start pt-16 text-3xl z-10 font-semibold w-52">
                        <div>Птицы</div>
                        <div className="flex flex-col items-center space-y-6">
                            <div className="flex space-x-10">
                                <div className="flex flex-col items-center">
                                    <div>24</div>
                                    <div className="text-base">Вида</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div>40</div>
                                    <div className="text-base">Особей</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center self-center">
                                <div>40</div>
                                <div className="text-base">Вольеров</div>
                            </div>
                        </div>
                    </div> */}
                    </Link>
                </div>
                {/* <Link
                    href={"/animals/fish"}
                    className="row-span-2 col-start-5  rounded-xl  relative overflow-hidden"
                >
                    <Image
                        className="z-0 -translate-y-2.5"
                        src={fig3}
                        style={{
                            position: "absolute",
                        }}
                        quality={100}
                        alt="fig3"
                    />
                    <div className="flex flex-col  items-center pt-16 text-3xl font-semibold ">
                        <div className="z-10">Рыбы</div>
                    </div>
                </Link> */}
            </div>
        </div>
    );
};
