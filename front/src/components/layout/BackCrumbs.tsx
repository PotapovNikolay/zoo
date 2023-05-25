import Image from "next/image";
import arrow from '@icons/arrows/arrow-left.svg'
import { useRouter } from "next/router";

interface BackCrumbsProps {}

export const BackCrumbs: React.FC<BackCrumbsProps> = () => {

    const router = useRouter()

    
    
    return (
        <div className="hidden lg:block text-gray-500 font-normal px-28 pt-6 z-10 ">
            <button
                onClick={() => router.back()}
                className=" flex items-center space-x-2"
            >
                <Image src={arrow} alt={arrow} width={20} />
                <div> Назад </div>
            </button>
        </div>
    );
};
