import Link from "next/link";
import Image from "next/image";
import arrow from "@icons/arrows/arrow-right.svg";
import { useEffect, useRef, useState } from "react";
import { HeaderPopup } from "@modals";
import { useRouter } from "next/router";

export function Header() {
    const [showPopup, setShowPopup] = useState<Boolean>(false);

    return (
        <header
            className=" bg-main-blue hidden  lg:flex flex-row justify-between items-center px-16 py-6  relative"
            onMouseLeave={() => setShowPopup(false)}
        >
            <Link href="/" className="flex flex-col z-30 basis-2/12 ">
                <div className="text-4xl font-black">БЕЛZOO</div>
                <div className="text-sm">Белгородский зоопарк</div>
            </Link>
            <div
                className={
                    "z-30  grow transition-all duration-300" +
                    (showPopup ? " opacity-0 -translate-y-10 " : "")
                }
            >
                <div className="flex flex-row space-x-20  justify-center">
                    <Link
                        href="/animals"
                        onMouseEnter={() => setShowPopup(true)}
                    >
                        О животных
                    </Link>

                    <Link
                        className="header-tippy"
                        href="/about"
                        onMouseEnter={() => setShowPopup(true)}
                    >
                        О нас
                    </Link>

                    <Link
                        className="header-tippy"
                        href="specialists"
                        onMouseEnter={() => setShowPopup(true)}
                    >
                        Специалистам
                    </Link>
                    <Link
                        className="header-tippy"
                        href="/guests"
                        onMouseEnter={() => setShowPopup(true)}
                    >
                        Гостям
                    </Link>
                </div>
            </div>

            <button className="flex flex-col justify-center items-center border-full w-64 py-2 px-2 border-2 rounded-full z-30 basis-2/12 ">
                <span>
                    +7 999 999 99 99
                </span>
                <span>Работаем с 9:00 до 18:00</span>
                {/* <Image className=" scale-150" src={arrow} alt="arrow" /> */}
            </button>

            <HeaderPopup show={showPopup} />
        </header>
    );
}
