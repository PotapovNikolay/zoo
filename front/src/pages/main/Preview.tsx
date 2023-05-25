import { ButtonPrimary } from "@/src/components/buttons";
import { useRouter } from "next/router";
import Image from "next/image";
import preview from "@images/background/preview.png";

interface PreviewProps {}

export const Preview: React.FC<PreviewProps> = () => {
    const router = useRouter();

    function clickTickets(event: React.MouseEvent) {
        router.push("/tickets");
    }

    return (
        <div className="flex flex-col lg:flex-row  justify-center px-10 xl:px-24 pt-10  xl:pb-24  bg-main-blue ">
            <div className="block pt-4 xl:pt-24 ">
                <h1 className="text-4xl xl:text-7xl text-center xl:text-start font-black leading-tight  ">
                    С СЕМЬЕЙ В <br className="hidden xl:block" /> ЗООПАРК!
                </h1>
                <h6 className="lg:w-[55%] text-center lg:text-start">
                    Каждое ваше посещение помогает познавать мир подрастающему
                    поколению и сохранить животных
                </h6>
                <div className="hidden md:flex justify-center lg:block mt-10 md:mt-6">
                    <ButtonPrimary
                        type="button-circle-blue"
                        onClick={clickTickets}
                    >
                        Билеты
                    </ButtonPrimary>
                </div>
            </div>
            <div className=" w-full relative self-start pt-6 lg:pt-0">
                <Image src={preview} width={1500} alt="Image 1" quality={100} />
            </div>
            <div className="flex justify-center md:hidden mt-10">
                <ButtonPrimary type="button-circle-blue" onClick={clickTickets}>
                    Билеты
                </ButtonPrimary>
            </div>
        </div>
    );
};
