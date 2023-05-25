import { useRef } from "react";
import useSWRMutation from "swr/mutation";
import { dispatcher } from "@fetcher";
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { ButtonPrimary } from "@/src/components/buttons";

interface AddFaqProps {}

export const AddFaq: React.FC<AddFaqProps> = () => {
    const sernameRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);

    const { trigger, error } = useSWRMutation("/reviews", dispatcher);

    async function sendContacts() {
        const data = await trigger({
            name: nameRef.current?.value,
            text: textRef.current?.value,
        });
        if (data) {
            toast(data.message);
        }
    }

    return (
        <div className=" lg:flex lg:justify-center  ">
            <ToastContainer />
            <div className="bg-white mx-6 lg:mx-0 w-full lg:w-3/5 p-6 pb-8 rounded-2xl shadow-md">
                <div className="text-main-blue font-semibold text-lg mb-4">
                    Задать вопрос
                </div>
                <div className=" flex flex-col lg:flex-row lg:space-x-5 lg:h-28">
                    
                    <div className="mt-5 lg:mt-0 w-full  h-full relative self-stretch">
                        <textarea
                            ref={textRef}
                            id="area"
                            rows={4}
                            className="block p-2.5 w-full h-full  text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 peer"
                            placeholder="Напишите вопрос здесь..."
                        ></textarea>

                        <label
                            htmlFor={"area"}
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-90 top-2 z-10 origin-[0] invisible peer-focus:visible bg-white  px-4 peer-focus:px-2 peer-focus:text-main-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-1"
                        >
                            Вопрос
                        </label>
                    </div>
                </div>
                <div className="flex justify-center mt-5 lg:mt-8">
                    <ButtonPrimary type="button-orange" onClick={sendContacts}>
                        Отправить
                    </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};
