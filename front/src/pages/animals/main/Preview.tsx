import animalsPreview from "@images/animals/animalsPreview.jpg";
import Image from "next/image";
import { Classes } from "./Classes";

interface PreviewProps{


}

export const Preview:React.FC<PreviewProps> = () =>{

    return (
        <div className="bg-main-blue rounded-b-3xl flex justify-center pb-10 lg:pb-10 pt-6 lg:pt-0">
            <div className="mx-4 lg:mx-0 lg:w-10/12  relative border-white  rounded-2xl pt-10 text-center flex flex-col items-center">
                <h2 className=" font-extrabold leading-tight  ">
                    ЖИВОТНЫЕ БЕЛГОРОДСКОГО  ЗООПАРКА
                </h2>

                {/* <Classes /> */}

                {/* <div className="hidden lg:block border-white border-4 top-[12rem] rounded-2xl overflow-hidden w-9/12 h-[30rem] absolute">
                    <Image
                        className=""
                        src={animalsPreview}
                        alt="animalsPreview"
                        style={{
                            objectFit: "contain",
                        }}
                        quality={100}
                    />
                </div> */}
            </div>
        </div>
    );
}