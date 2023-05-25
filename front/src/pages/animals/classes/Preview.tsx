import Image, { StaticImageData } from "next/image";
import {PreviewPropsType} from "@types";


export const Preview:React.FC<PreviewPropsType> =({title, description, image}) =>{

    return (
        <div className="bg-main-blue rounded-b-3xl flex flex-col lg:flex-row lg:h-[22rem] px-6 lg:px-16 pt-10 lg:pt-10  z-0">
            <div className=" pt-10">
                <h2 className="uppercase  text-start">{title}</h2>
                <h6 className=" lg:w-8/12 text-start ">{description}</h6>
            </div>
            <div className="border-4 my-6 lg:mt-0 border-white rounded-2xl overflow-hidden ">
                <Image src={image} alt={"Млекопитающие"} />
            </div>
        </div>
    );
}