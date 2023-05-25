import Image from "next/image";
import arrow from "@icons/arrow-right.svg";
import arrowBlue from "@icons/arrows/arrow-right-blue.svg";
import arrowDown from "@icons/arrows/box-arrow-in-down.svg";
import { TicketVertical } from "@/src/components/tickets";

interface SuccessProps {}

export const Success: React.FC<SuccessProps> = () => {
    function clickTickets(event: React.MouseEvent) {}

    return (
        <div className="flex flex-col space-y-4 items-center pt-10">
            <div className="bg-main-blue p-6 px-8 rounded-xl text-3xl font-semibold w-8/12">
                Поздравляем с покупкой билетов!
            </div>
            <div className="flex flex-row space-x-4 w-8/12">
                <div className="flex flex-col w-7/12 justify-center space-y-4 bg-main-blue rounded-xl p-8 ">
                    <div className="text-3xl font-semibol">
                        Все билеты в одном QR-коде!
                    </div>
                    <div className="text-xl">
                        Теперь вы можете пройти на <br/> территорию зоопарка
                    </div>
                    <div className="text-xl">
                        Вам не обязательно его распечатывать,<br/> достаточно
                        показать его на телефоне
                    </div>
                    <div className="flex flex-col space-y-3">
                        <button className=" text-white text-lg mt-4 rounded-full text-center w-56 py-2 bg-gradient-to-r from-[#fe9c64] to-[#fe804c]">
                            Приятной прогулки!
                        </button>
                    </div>
                </div>
                <TicketVertical />
                <div className="flex flex-col justify-between w-56 space-y-4">
                    <div className="bg-main-blue rounded-xl p-4 px-6 h-full ">
                        <div className="text-xl">
                            Страница с инструкцией для
                            <span> QR-кодов</span>
                        </div>
                        <button className="w-full py-1.5 pl-6 mt-4 bg-white rounded-full text-main-blue flex items-center relative">
                            <span>Перейти</span>
                            <span className="rounded-full p-1.5 absolute right-1 ">
                                <Image
                                    src={arrowBlue}
                                    alt="arrowBlue"
                                    width={24}
                                    height={24}
                                />
                            </span>
                        </button>
                    </div>
                    <div className="bg-main-blue rounded-xl p-4 px-6 h-full flex flex-col justify-center">
                        <div className="text-xl">Скачать QR-код</div>
                        <button className="w-full py-1.5 pl-6 mt-4 bg-white rounded-full text-main-blue flex items-center relative">
                            <span>Скачать</span>
                            <span className="rounded-full p-1.5 absolute right-1 ">
                                <Image
                                    src={arrowDown}
                                    alt="arrowDown"
                                    width={24}
                                    height={24}
                                />
                            </span>
                        </button>
                    </div>
                    <div className="bg-main-blue rounded-xl p-4 px-6 h-full flex flex-col justify-center">
                        <div className="text-xl">Оставить отзыв</div>
                        <button className="w-full py-1.5 pl-6 mt-4 bg-white rounded-full text-main-blue flex items-center relative">
                            <span>Перейти</span>
                            <span className="rounded-full p-1.5 absolute right-1 ">
                                <Image
                                    src={arrowBlue}
                                    alt="arrowBlue"
                                    width={24}
                                    height={24}
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
