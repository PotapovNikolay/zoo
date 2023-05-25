import { BreadCrumbs } from "@/src/components/layout";
import Head from "next/head";
import Image from "next/image";
import arrow from "@icons/arrows/arrow-circle-orange.svg";
import { map, question, ticket } from "@/public/icons/qr";
import { ButtonPrimary } from "@/src/components/buttons";
import { useRouter } from "next/router";
import qrscan from '@images/another/qrscan.svg'

export default function QR() {

    const router = useRouter();

    function toTickets(){
        router.push("/tickets");
    }
    function toAnimals() {
        router.push("/animals");
    }
    function toMap() {
        router.push("/about/map");
    }

    return (
        <div className="bg-main-gray">
            <Head>
                <title>QR-коды</title>
            </Head>
            <BreadCrumbs
                props={{
                    root: { path: "/about/qr", title: "QR-код" },
                }}
            />
            <div className="h-8 bg-main-blue w-full rounded-b-2xl"></div>
            <div className=" lg:pl-10 bg-main-blue rounded-2xl mt-10 mx-6 lg:mx-20 flex flex-col lg:flex-row">
                <div className="py-6 lg:py-20 lg:pt-10">
                    <h2 className="uppercase lg:whitespace-nowrap lg:pb-10 ">
                        как сканировать qr-код
                    </h2>
                    <div className="flex px-4 lg:px-0">
                        <div className="flex flex-col items-center lg:items-start mt-6">
                            <div className="flex space-x-4 items-center  self-start">
                                <div>
                                    <div className="bg-main-orange lg:text-2xl font-semibold w-6 h-6 lg:w-12 lg:h-12 flex flex-col justify-center items-center rounded-xl">
                                        1
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        Откройте на своем устройстве сканер
                                        QR-кодов{" "}
                                        <br className="hidden lg:block" /> или
                                        просто включите камеру (если она{" "}
                                        <br className="hidden lg:block" />
                                        поддерживает чтение таких кодов)
                                    </h3>
                                </div>
                            </div>
                            <div className="w-12 h-12 lg:my-2 flex flex-col justify-center items-center">
                                <div className="bg-white w-6 h-6 relative rounded-full ">
                                    <Image src={arrow} fill alt="стрелка" />
                                </div>
                            </div>
                            <div className="flex space-x-4 items-center self-start">
                                <div>
                                    <div className="bg-main-orange lg:text-2xl font-semibold w-6 h-6 lg:w-12 lg:h-12 flex flex-col justify-center items-center rounded-xl">
                                        2
                                    </div>
                                </div>
                                <h3 className="font-semibold">
                                    Наведите камеру на QR-код - он должен{" "}
                                    <br className="hidden lg:block" />
                                    распознаться под любым углом
                                </h3>
                            </div>
                            <div className="w-12 h-12 lg:my-2 flex flex-col justify-center items-center">
                                <div className="bg-white w-6 h-6 relative rounded-full ">
                                    <Image src={arrow} fill alt="стрелка" />
                                </div>
                            </div>
                            <div className="flex space-x-4 items-center self-start">
                                <div>
                                    <div className="bg-main-orange lg:text-2xl font-semibold w-6 h-6 lg:w-12 lg:h-12 flex flex-col justify-center items-center rounded-xl">
                                        3
                                    </div>
                                </div>
                                <h3 className="font-semibold">
                                    Расшифрованная информация <br /> мнговенно
                                    появится на экране
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-1/2 mt-10">
                    <Image src={qrscan} alt="скан" fill className="bottom-0" />
                </div>
            </div>

            <h2 className="uppercase text-main-blue mx-6 lg:mx-0 lg:ml-20 mt-10 lg:mt-20">
                зачем нужен <span className="whitespace-nowrap">qr-код</span> в
                зоопарке
            </h2>
            <div className="mt-6 lg:mt-10 flex flex-col lg:flex-row flex-wrap  mx-6 lg:mx-20">
                <div className="bg-main-blue lg:mr-6 rounded-xl relative p-4 py-6 lg:w-1/3">
                    <div className="flex space-x-4 items-center">
                        <div className="h-12 w-12 flex flex-col justify-center items-center bg-main-orange rounded-xl">
                            <Image
                                src={ticket}
                                alt="билет"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="text-xl font-bold">Билеты</div>
                    </div>
                    <h6 className="text-start">
                        С помощью QR-кода, который выдается вам после покупки
                        билетов вы можете посетить наш зоопарк
                    </h6>
                </div>
                <div className="bg-main-blue rounded-xl relative p-4 py-6 lg:w-1/3 mt-4 lg:mt-0">
                    <div className="flex space-x-4 items-center">
                        <div className="h-12 w-12 flex flex-col justify-center items-center bg-main-orange rounded-xl">
                            <Image
                                src={map}
                                alt="билет"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="text-xl font-bold">Карта</div>
                    </div>
                    <h6 className="text-start">
                        С помощью QR-кода вы можете перейти на интерактивную
                        карту, которая поможет вас ориентироваться на территории
                        зоопарка
                    </h6>
                </div>
                <div className="bg-main-blue rounded-xl relative p-4 py-6 lg:w-3/5 mt-4 lg:mt-6">
                    <div className="flex space-x-4 items-center">
                        <div className="h-12 w-12 flex flex-col justify-center items-center bg-main-orange rounded-xl">
                            <Image
                                src={question}
                                alt="билет"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="text-xl font-bold">О животных</div>
                    </div>
                    <h6 className="text-start">
                        С помощью QR-кода вас моментально перенаправит на
                        страницу животного, код, которого вы сканировали, где
                        находится интересующая и полезная информация о нем. А
                        наш голосовой помощник может прочесть ее вслух
                    </h6>
                </div>
            </div>
            <h2 className="uppercase text-main-blue lg:ml-20 mt-10 lg:mt-20">
                ждем в гости
            </h2>
            <div className="flex flex-col lg:flex-row lg:space-x-8 mx-6 lg:mx-20 lg:mt-6">
                <div className="bg-main-blue rounded-xl relative p-6   mt-6">
                    <h6 className="mt-0 mb-6 text-start">
                        Предлагаем в живую посмотреть на наших <br /> животных и
                        опробовать систему QR-кодов в действии!
                    </h6>
                    <ButtonPrimary
                        type="button-circle-orange"
                        onClick={toTickets}
                    >
                        Билеты{" "}
                    </ButtonPrimary>
                </div>
                <div className="bg-main-blue rounded-xl relative p-6 flex flex-col justify-between  mt-6">
                    <h6 className="mt-0 mb-6 text-start">
                        А также перейти на другие страницы нашего сайта
                    </h6>
                    <div className="flex space-x-6">
                        <ButtonPrimary
                            type="button-circle-blue"
                            onClick={toAnimals}
                        >
                            Животные
                        </ButtonPrimary>
                        <div className="hidden lg:block">
                            <ButtonPrimary
                                type="button-circle-blue"
                                onClick={toMap}
                            >
                                Мы на карте
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
