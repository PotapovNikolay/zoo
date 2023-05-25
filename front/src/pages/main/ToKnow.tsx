import { ButtonPrimary } from "@/src/components/buttons";
import useSWRMutation from "swr/mutation";
import { dispatcher } from "@fetcher";
import contacts from "@images/background/bg-contact-us.png";
import Image from "next/image";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

interface ToKnowProps {}


export const ToKnow: React.FC<ToKnowProps> = () => {
    
    const router = useRouter()

    const toContacts = () => router.push("guests/contacts");

    return (
        <>
            <ToastContainer />
            <div className=" mt-16 lg:mt-24 mx-6 lg:mx-14 relative bg-blue-300 flex flex-col lg:flex-row items-center justify-around rounded-2xl py-10 lg:py-20 px-10 overflow-hidden">
                <Image
                    src={contacts}
                    style={{
                        objectFit: "fill",
                        position: "absolute",
                    }}
                    quality={100}
                    alt="fig4"
                    className="hidden lg:block"
                />

                <div className="basis-1/3 z-10">
                    <h3 className="text-3xl lg:text-5xl font-bold">
                        Связаться с нами
                    </h3>
                    <div className="my-4">
                        Переходите на страницу с информацией о нас
                    </div>
                </div>

                {/* <input
                    ref={mailRef}
                    placeholder="Введите почту"
                    className="z-10 w-full lg:w-auto lg:basis-1/3 form-input p-1 pb-0 border-white border-0 border-b-2 bg-transparent focus:border-white focus:ring-0  focus:outline-none placeholder-blue-100"
                /> */}

                <div className="mt-6 md:mr-auto lg:mr-0 lg:mt-0">
                    <ButtonPrimary
                        type="button-circle-orange"
                        onClick={toContacts}
                    >
                        Перейти
                    </ButtonPrimary>
                </div>
            </div>
        </>
    );
};
