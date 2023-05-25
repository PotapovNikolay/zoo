import Image from "next/image";
import mammalsPreview from "@images/animals/mammalsPreview.jpg";
import qr from "@images/another/qrcode.png";
interface TicketVerticalProps {}

export const TicketVertical: React.FC<TicketVerticalProps> = () => {
    return (
        <div className="flex flex-col justify-between rounded-xl bg-main-blue h-full relative w-56">
            <div className="flex flex-col h-full pb-8">
                <div className="absolute top-6 -left-4 flex flex-col justify-center h-full z-10">
                    <div className="w-8 h-8 rounded-full bg-main-gray " />
                </div>
                <div className="absolute top-6 left-0 right-0 flex flex-col justify-center h-full z-0">
                    <div className="border-dashed border-2 border-white h-[0.5px] w-full " />
                </div>
                <div className="rounded-t-xl h-28 overflow-hidden">
                    <Image
                        src={mammalsPreview}
                        alt=""
                        width={280}
                        quality={100}
                    />
                </div>
                <span className="text-center text-sm opacity-75 mt-2">
                    Белгородский зоопарк
                </span>
                <span className="text-center text-sm font-black">БЕЛZOO</span>
                <span className="text-center text-lg font-black mt-6">
                    ВХОДНОЙ БИЛЕТ
                </span>
            </div>
            <div className="bg-main-blue  overflow-hidden flex items-center justify-center rounded-b-xl pb-2">
                <Image
                    src={qr}
                    alt="qr"
                    className="invert"
                    style={{ objectFit: "contain" }}
                    width={170}
                    height={170}
                    quality={100}
                />
            </div>

            <div className="absolute top-6 -right-4 flex flex-col justify-center h-full">
                <div className="w-8 h-8 rounded-full bg-main-gray " />
            </div>
        </div>
    );
};
