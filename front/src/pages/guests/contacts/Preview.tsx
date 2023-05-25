import bgContacts from "@images/background/bg-contacts-blue.png";
import Image from "next/image";
import geo from "@icons/pages/contacts/geo-alt-fill.svg";
import phone from "@icons/pages/contacts/telephone-fill.svg";
import mail from "@icons/pages/contacts/envelope-fill.svg";
import vk from "@icons/social/vk.png";
import viber from "@icons/social/viber.png";
import whatsapp from "@icons/social/whatsapp.png";
import telegram from "@icons/social/telegram.png";
// import bgOrange from "@images/bg-contacts-orange.svg";
import { useRef, useState } from "react";
import useSWRMutation from "swr/mutation";
import { dispatcher } from "@fetcher";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface PreviewProps {}

export const Preview: React.FC<PreviewProps> = () => {
    const mailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    const { trigger, error } = useSWRMutation("/feedback", dispatcher);

    async function sendContacts() {
        if (
            mailRef.current !== null &&
            phoneRef.current !== null &&
            nameRef.current !== null
        ) {
            const data = await trigger({
                email: mailRef.current.value,
                phone: phoneRef.current.value,
                name: nameRef.current.value,
            });
            if (data) {
                toast(data.message);
            }
        }
    }
    return (
        <div className="flex items-baseline lg:overflow-hidden bg-main-gray relative lg:h-[40rem] pt-16 ">
            <ToastContainer />
            <Image
                className="-translate-y-72 z-0"
                src={bgContacts}
                style={{
                    objectFit: "contain",
                    position: "absolute",
                }}
                quality={100}
                alt="fig4"
            />
            <div className="hidden  z-10 lg:flex justify-center basis-1/3">
                <div>
                    <h6 className="font-bold text-lg">
                        Хотите с нами связаться?
                        <br />
                        Вы можете отправить сообщение
                        <br /> нам через форму или обратиться <br /> с помощью
                        информации ниже
                    </h6>
                </div>
            </div>

            <div className="bg-white rounded-2xl flex flex-col lg:flex-row text-main-blue p-6 z-10 relative mx-6 lg:mx-0 w-full lg:w-[40rem] h-[22rem] lg:h-[27rem] shadow-[2.0px_4.0px_8px_rgba(0,0,0,0.2)]">
                <div className=" flex flex-col justify-center  lg:w-1/2">
                    <div className="font-extrabold text-xl ">
                        Связаться с нами
                    </div>
                    <div className="relative mt-4 lg:mt-8">
                        <input
                            ref={nameRef}
                            type="text"
                            id="name"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main-blue peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor={"name"}
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-90 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-2 peer-focus:text-main-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-1"
                        >
                            Имя
                        </label>
                    </div>
                    <div className="relative mt-5">
                        <input
                            ref={mailRef}
                            type="text"
                            id="email"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main-blue autofill:bg-white valid:bg-white placeholder-shown:bg-white peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor={"email"}
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-90 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-2 peer-focus:text-main-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-1"
                        >
                            Почта
                        </label>
                    </div>

                    <div className="self-center my-1.5">или</div>

                    <div className="relative">
                        <input
                            ref={phoneRef}
                            type="text"
                            id="phone"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main-blue peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor={"phone"}
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-90 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-2 peer-focus:text-main-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-1"
                        >
                            Телефон
                        </label>
                    </div>


                    <button
                        onClick={() => sendContacts()}
                        className="text-white text-lg mt-5 rounded-full text-center w-full py-2.5 bg-gradient-to-r from-[#fe9c64] to-[#fe804c]"
                    >
                        Отправить
                    </button>
                </div>

                <div className=" h-full   text-white  z-10 relative translate-y-10 lg:translate-y-0 lg:absolute lg:-right-[5rem]">
                    <div className="bg-main-orange lg:overflow-hidden rounded-2xl flex flex-col space-y-6 p-6 lg:px-10 shadow-[2.0px_4.0px_8px_rgba(0,0,0,0.2)]">
        
                        <div className="z-10">
                            <div className="font-extrabold text-xl mb-2">
                                Информация
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-6">
                                    <div className="bg-white rounded-lg p-1.5 w-10 h-10 ">
                                        <Image
                                            src={geo}
                                            alt={"geo"}
                                            width={100}
                                        />
                                    </div>
                                    <div>Волчанская ул. 292Ж</div>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <div className="bg-white rounded-lg p-2 w-10 h-10 ">
                                        <Image
                                            src={phone}
                                            alt={"geo"}
                                            width={100}
                                        />
                                    </div>
                                    <div>+7(123)-456-78-90</div>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <div className="bg-white rounded-lg p-2 w-10 h-10 ">
                                        <Image
                                            src={mail}
                                            alt={"geo"}
                                            width={100}
                                        />
                                    </div>
                                    <div>belzoo@gmail.com</div>
                                </div>
                            </div>
                            <div>
                                <div className="font-extrabold text-xl mb-2 mt-6 text-center">
                                    Мы в соц. сетях
                                </div>
                            </div>
                            <div className="flex items-center justify-center space-x-4 self-center">
                                <div className="bg-white shadow-md w-10 h-10 p-1.5 rounded-xl ">
                                    <Image
                                        src={vk}
                                        width={100}
                                        quality={100}
                                        alt={"vk"}
                                    />
                                </div>
                                <div className="bg-white shadow-md w-10 h-10 p-1.5 rounded-xl ">
                                    <Image
                                        src={telegram}
                                        width={100}
                                        quality={100}
                                        alt={"vk"}
                                    />
                                </div>
                                <div className="bg-white shadow-md w-10 h-10 p-1.5 rounded-xl ">
                                    <Image
                                        src={viber}
                                        width={100}
                                        quality={100}
                                        alt={"vk"}
                                    />
                                </div>
                                <div className="bg-white shadow-md w-10 h-10 p-1.5 rounded-xl ">
                                    <Image
                                        src={whatsapp}
                                        width={90}
                                        quality={100}
                                        alt={"vk"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="self center text-center ">
                            Будем рады вашему обращению!
                        </div>
                    </div>
                </div>
            </div>

            {/* <Image
                        src={wave}
                            style={{
                            objectFit: 'fill',
                            position:"absolute",
                        }}
                        alt='fig4'
                    /> */}
        </div>
    );
};
