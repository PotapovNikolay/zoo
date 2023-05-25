import iconAdult from "@icons/pages/tickets/person-fill.svg";
import iconChild from "@icons/pages/tickets/balloon-fill.svg";
import plus from "@icons/pages/tickets/plus-circle-fill.svg";
import dash from "@icons/pages/tickets/dash-circle-fill.svg";
import Image, { StaticImageData } from "next/image";
import { useHelpers, useCounter } from "@hooks";


type person = "Взрослый" | "Детский";
// type icon = iconAdult | iconChild;

interface hook {
    count: number;
    trueSetCount: Function;
}

interface TicketItemProps {
    price: number;
    type: person;
    icon: StaticImageData;
    hook: hook;
}

const TicketItem: React.FC<TicketItemProps> = ({ price, type, icon, hook }) => {
    const { useWordFormat } = useHelpers();

    return (
        <div className="bg-main-blue rounded-2xl p-4 px-6  flex justify-between  text-white relative">
            <div className="absolute h-full  top-0 -left-10 flex flex-col justify-center">
                <button onClick={() => hook.trueSetCount(-1)}>
                    <Image src={dash} alt="dash" width={30} height={30} />
                </button>
            </div>
            <div className="flex flex-col">
                <Image
                    src={icon}
                    alt="icon"
                    width={45}
                    height={45}
                    className="bg-main-orange rounded-xl p-1"
                />

                <div className="mt-4 text-lg font-bold">{type}</div>
                <div className="text-sm opacity-75">
                    На {hook.count} {useWordFormat(hook.count)}
                </div>
            </div>
            <div className="self-end text-xl lg:text-3xl font-bold">
                {price * hook.count} ₽
            </div>
            <div className="absolute h-full  top-0 -right-10 flex flex-col justify-center">
                <button onClick={() => hook.trueSetCount(1)}>
                    <Image src={plus} alt="plus" width={30} height={30} />
                </button>
            </div>
        </div>
    );
};

interface TicketsProps {}

export const Tickets: React.FC<TicketsProps> = () => {
    const adult = useCounter();
    const child = useCounter();

    return (
        <div className=" flex flex-col text-main-blue lg:basis-1/3 px-14 lg:px-0 lg:pl-28 mt-10 lg:mt-6 space-y-4 ">
            <div className="text-lg">Выбранные билеты</div>
            <TicketItem
                price={400}
                type={"Взрослый"}
                icon={iconAdult}
                hook={adult}
            />

            <TicketItem
                price={200}
                type={"Детский"}
                icon={iconChild}
                hook={child}
            />
            <div className="bg-main-blue rounded-2xl p-4 px-6  flex flex-col  text-white relative">
                <div>Для отправки вам купленные билеты введите почту</div>
                <div className="relative mt-4">
                    <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor={"floating_outlined"}
                        className="absolute text-sm text-white  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-main-blue  px-4 peer-focus:px-2   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-1"
                    >
                        Почта
                    </label>
                </div>
            </div>
            <div className="text-main-orange  relative ">
                * дети с 3-х до 10 лет при предоставлении документа
                подтверждающего возраст
            </div>
            {/* <div className="text-main-blue relative flex items-center space-x-4 py-4">
                <label className="relative inline-flex  cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer " />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:ring-0 peer-focus:outline-none   rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-main-orange"></div>
                </label>
                <div>
                    <span className="text-main-orange">
                        Согласен с условиями
                    </span>{" "}
                    пользовательского соглашения и правилами покупки билетов
                </div>
            </div> */}
            <div className="border-b-2 border-main-blue  opacity-75 "></div>
            <div className=" flex justify-between text-lg font-bold pt-4">
                <div className="">Всего</div>
                <div>{adult.count * 400 + child.count * 200} ₽</div>
            </div>
            <button className=" text-white text-lg mt-4 rounded-2xl text-center py-2.5 bg-gradient-to-r from-[#fe9c64] to-[#fe804c]">
                Заказать билеты за {adult.count * 400 + child.count * 200} ₽
            </button>
        </div>
    );
};
