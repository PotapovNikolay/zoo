import x from "@icons/x.svg";
import exclamation from "@icons/exclamation-circle.svg";
import Head from "next/head";
import Image from "next/image";

export interface type {
    [index: string]: string;
}

// const prohibited = [
//     ():React.ReactNode=><div > кормить, дразнить и пугать животных,<br/> бросать в вольеры посторонние предметы</div>,
//     ()=><div >приносить с собой домашних животных </div>,
//     ()=><div>протягивать через решётки руки и <br/> прикасаться к животным различными<br/> предметами</div>,
//     ()=><div >находиться с крупногабаритной <br/> кладью (размер более 40х30х30 см)</div>,
//     ()=><div >находиться без билета или документов,<br/> дающих право на бесплатное<br/> посещение зоопарка</div>,
//     ()=><div >Заходить и перелезать <br/> через барьеры и ограждения</div>,
//     ()=><div >ходить по газонам, ломать <br/> ветки, рвать цветы </div>,
//     ()=><div >ходить по газонам, ломать <br/> ветки, рвать цветы </div>

// ]

// const info:Array<string> = [
//     'По всем интересующим вас вопросам и в случаях возникающих недоразумений обращайтесь к дежурному администратору по тел. +7 (910) 737-10-30',
//     'Вход в зоопарк прекращается за час до его закрытия',
//     'Лица, допускающие нарушения правил поведения, могут быть удалены с территории зоопарка службой охраны.'
// ]

interface GuestsProps {
    children: React.ReactNode;
}

export default function Guests() {
    return (
        <div className="bg-main-blue px-6 lg:px-16 py-16 lg:py-20 rounded-b-3xl ">
            <Head>
                <title>Правила поведения</title>
            </Head>
            <div>
                <h2 className="">ПРАВИЛА ПОВЕДЕНИЯ</h2>
                <h6 className="text-start lg:w-9/12 text-bold">
                    Коллекция Белгородского зоопарка — большая государственная и
                    научная ценность. Напоминаем: зоопарк — учреждение
                    повышенной опасности! Ваша безопасность и благополучие его
                    обитателей зависит от соблюдения правил поведения на
                    территории муниципального автономного учреждения
                    «Белгородский зоопарк».
                </h6>
                <h6 className="text-start lg:w-9/12 text-bold">
                    Если вы пришли в зоопарк с детьми — будьте особенно
                    внимательны. Не оставляйте ваших детей без присмотра.
                    Маленьких детей держите за руку или на руках. При несчастных
                    случаях, потере детей, возникновении каких-либо
                    недоразумений обращайтесь к дежурному администратору
                </h6>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-16">
                <div className="flex items-center space-x-4 text-white font-bold text-2xl my-4 lg:my-10">
                    <div className="bg-main-red w-8 h-8 lg:w-10 lg:h-10 p-1 rounded-lg">
                        <Image src={x} alt="x" width={80} />
                    </div>
                    <div>запрещается</div>
                </div>
                <div className="flex items-center space-x-4 text-white font-bold text-2xl lg:my-10">
                    <div className="bg-main-orange w-8 h-8 lg:w-10 lg:h-10 p-1.5 rounded-lg">
                        <Image src={exclamation} alt="exclamation" width={80} />
                    </div>
                    <div>информация</div>
                </div>
            </div>
            <div className="flex  flex-wrap space-x-5 space-y-5 -ml-5">
                <div className="flex items-center space-x-4 lg:h-28  text-main-blue bg-white p-4 rounded-xl mt-5 ml-5">
                    <div>
                        <div className="bg-main-red w-8 h-8 lg:w-10 lg:h-10 p-1 rounded-lg relative">
                            <Image src={x} alt="x" fill />
                        </div>
                    </div>
                    <div className="text-main-blue  ">
                        кормить, дразнить и пугать животных,
                        <br className="hidden lg:block" /> бросать в вольеры
                        посторонние предметы
                    </div>
                </div>

                <div className="flex items-center space-x-4 lg:h-28   bg-white p-4 rounded-xl">
                    <div>
                        <div className="bg-main-red w-8 h-8 lg:w-10 lg:h-10 p-1 rounded-lg relative">
                            <Image src={x} alt="x" fill />
                        </div>
                    </div>
                    <div className="text-main-blue  ">
                        приносить с собой домашних животных
                    </div>
                </div>

                <div className="flex items-center space-x-4 lg:h-28   bg-white p-4 rounded-xl ml-0">
                    <div>
                        <div className="bg-main-red w-8 h-8 lg:w-10 lg:h-10 p-1 rounded-lg relative">
                            <Image src={x} alt="x" fill />
                        </div>
                    </div>
                    <div className="text-main-blue  ">
                        протягивать через решётки руки и{" "}
                        <br className="hidden lg:block" /> прикасаться к
                        животным различными
                        <br className="hidden lg:block" /> предметами
                    </div>
                </div>

                <div className="flex items-center space-x-4 lg:h-28   bg-white p-4 rounded-xl">
                    <div>
                        <div className="bg-main-red w-8 h-8 lg:w-10 lg:h-10 p-1 rounded-lg relative">
                            <Image src={x} alt="x" fill />
                        </div>
                    </div>
                    <div className="text-main-blue  ">
                        находиться с крупногабаритной{" "}
                        <br className="hidden lg:block" /> кладью (размер более
                        40х30х30 см)
                    </div>
                </div>

                <div className="flex items-center space-x-4 lg:h-28   bg-white p-4 rounded-xl">
                    <div>
                        <div className="bg-main-red w-8 h-8 lg:w-10 lg:h-10 p-1 rounded-lg relative">
                            <Image src={x} alt="x" fill />
                        </div>
                    </div>
                    <div className="text-main-blue  ">
                        находиться без билета или документов,
                        <br className="hidden lg:block" /> дающих право на
                        бесплатное
                        <br className="hidden lg:block" /> посещение зоопарка
                    </div>
                </div>

                <div className="flex items-center space-x-4 lg:h-28   bg-white p-4 rounded-xl ml-0">
                    <div>
                        <div className="bg-main-red w-8 h-8 lg:w-10 lg:h-10 p-1 rounded-lg relative">
                            <Image src={x} alt="x" fill />
                        </div>
                    </div>
                    <div className="text-main-blue  ">
                        Заходить и перелезать <br className="hidden lg:block" />{" "}
                        через барьеры и ограждения
                    </div>
                </div>

                <div className="flex items-center space-x-4 lg:h-28   bg-white p-4 rounded-xl">
                    <div>
                        <div className="bg-main-red w-8 h-8 lg:w-10 lg:h-10 p-1 rounded-lg relative">
                            <Image src={x} alt="x" fill />
                        </div>
                    </div>
                    <div className="text-main-blue  ">
                        ходить по газонам, ломать{" "}
                        <br className="hidden lg:block" /> ветки, рвать цветы
                    </div>
                </div>

                <div className="flex items-center space-x-4 lg:h-28   bg-white p-4 rounded-xl">
                    <div>
                        <div className="bg-main-red w-8 h-8 lg:w-10 lg:h-10 p-1 rounded-lg relative">
                            <Image src={x} alt="x" fill />
                        </div>
                    </div>
                    <div className="text-main-blue  ">
                        передвигаться по территории зоопарка, на скейтах,
                        <br className="hidden lg:block" /> роликовых коньках,
                        велосипедах и детских машинках,
                        <br className="hidden lg:block" /> сигвеях, самокатах (в
                        том числе электросамокатах) и др
                    </div>
                </div>
            </div>

            <div className="flex  flex-wrap space-x-5 space-y-5 -ml-5 mt-6 lg:mt-16">
                <div className="flex items-center space-x-4 lg:h-28   bg-white p-4 rounded-xl mt-5 ml-5">
                    <div>
                        <div className="bg-main-orange w-8 h-8 lg:w-10 lg:h-10 p-1.5 rounded-lg relative">
                            <Image
                                src={exclamation}
                                alt="exclamation"
                                fill
                                className="p-1"
                            />
                        </div>
                    </div>

                    <div className="text-main-blue  ">
                        По всем интересующим вас вопросам и в случаях
                        возникающих <br className="hidden lg:block" />{" "}
                        недоразумений обращайтесь к дежурному администратору{" "}
                        <br /> по тел. +7 (910)
                        737-10-30
                    </div>
                </div>

                <div className="flex items-center space-x-4 lg:h-28   bg-white p-4 rounded-xl">
                    <div>
                        <div className="bg-main-orange w-8 h-8 lg:w-10 lg:h-10 p-1.5 rounded-lg relative">
                            <Image
                                src={exclamation}
                                alt="exclamation"
                                fill
                                className="p-1"
                            />
                        </div>
                    </div>
                    <div className="text-main-blue  ">
                        Вход в зоопарк прекращается{" "}
                        <br className="hidden lg:block" /> за час до его
                        закрытия
                    </div>
                </div>

                <div className="flex items-center space-x-4 lg:h-28   bg-white p-4 rounded-xl ml-0">
                    <div>
                        <div className="bg-main-orange w-8 h-8 lg:w-10 lg:h-10 p-1.5 rounded-lg relative">
                            <Image
                                src={exclamation}
                                alt="exclamation"
                                fill
                                className="p-1"
                            />
                        </div>
                    </div>
                    <div className="text-main-blue  ">
                        Лица, допускающие нарушения правил поведения,
                        <br className="hidden lg:block" /> могут быть удалены с
                        территории зоопарка <br className="hidden lg:block" />{" "}
                        службой охраны
                    </div>
                </div>
            </div>
        </div>
    );
}
