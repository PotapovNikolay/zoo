import { ButtonPrimary } from "@/src/components/buttons";
import Image from "next/image";
import qrcode from '@images/background/qrcode.png'

interface AboutAnimalsProps{


}

export const AboutAnimals:React.FC<AboutAnimalsProps> = () =>{

    function clickTickets(event:React.MouseEvent){
        console.log('da');
    }

    return (
        <div className="flex justify-end mt-16 lg:mt-36 mx-6 lg:mx-20 py-6 lg:py-14 bg-main-blue rounded-3xl relative overflow-hidden">
            <Image
                src={qrcode}
                alt="dd"
                fill
                className="object-cover bg-black opacity-40 xl:bg-transparent xl:opacity-100"
            />
            <div className="w-[40rem] z-20 ">
                <h1 className="text-3xl text-center lg:text-start lg:text-6xl text-shadow font-black leading-tight">
                    УЗНАЙ <br /> О ЖИВОТНЫХ <br /> БОЛЬШЕ
                </h1>
                <h6 className="hidden lg:block w-2/3">
                    Благодаря QR-кодам вы сможете узнать о животных практически
                    все! Начиная от истории и заканчивая характеристиками,
                    такими как возраст и вес
                </h6>
                <div className="flex justify-center lg:justify-start mt-4 lg:mt-10">
                    <ButtonPrimary type="button-orange" onClick={clickTickets}>
                        Подробнее
                    </ButtonPrimary>
                </div>
            </div>
        </div>
    );
}