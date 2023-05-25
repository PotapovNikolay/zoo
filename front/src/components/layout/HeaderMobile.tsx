import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function HeaderMobile({ openMenu }:any) {
    return (
        <header className="bg-main-blue lg:hidden fixed top-0 left-0 right-0 z-[60] p-4 py-2 flex justify-center items-center ">
            <button onClick={()=>{
                openMenu(true)
            }} className="absolute left-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-8 h-8"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                </svg>
            </button>
            <Link href="/" className=" z-30  ">
                <div className="text-xl font-black">БЕЛZOO</div>
            </Link>
        </header>
    );
}
