import bookmarkStarFill from "@icons/bookmarkStarFill.svg";
import stars from "@icons/stars.svg";
import Image from "next/image";
import { SpecificationsPropsType } from "@types";

export const Specifications: React.FC<SpecificationsPropsType> = ({
    features,
}) => {

    return (
        <div className="bg-main-gray px-6 lg:px-16 pt-10 text-main-blue">
            <div className="flex space-x-4 lg:space-x-10 ">
                <Image
                    src={bookmarkStarFill}
                    alt={"bookmarkStarFill"}
                    width={50}
                    quality={100}
                />
                <h4 className="text-2xl lg:text-4xl  font-bold">
                    Отличительные особенности
                </h4>
            </div>

            <div className="flex flex-row flex-wrap pt-6 lg:pt-10 pb-10 lg:pb-20 space-y-4 ">
                {features.map((feature, key) => {
                    return (
                        <div key={key} className="flex  items-center ">
                            {/* <div className="leading-tight inline font-bold w-1/2 bg-red-200"> */}
                            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-5 lg:w-3/5 bg-white  p-3 rounded-xl transition-shadow duration-300  shadow-md hover:shadow-blue-400 group">
                                <Image
                                    src={stars}
                                    alt={"stars"}
                                    width={60}
                                    className="bg-main-blue  rounded-xl p-2 w-10 h-10 mb-2 lg:mb-0 hidden lg:block"
                                />
                                <span>{feature}</span>
                            </div>
                            {/* </div> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
