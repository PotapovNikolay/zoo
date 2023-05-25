import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { treangle } from "@/public/map/layers/icons";

type direction = "tl" | "tr" | "bl" | "br";

interface BubbleChatProps {
    coords: { left: number; top: number };
    title?: string;
    child?: DOMRect;
    direction: direction;
}

const leftBubbles = ["Закрыто", "Австралия", "Контактная зона"];

export const BubbleChat: React.FC<BubbleChatProps> = ({
    coords,
    title,
    direction,
}) => {
    const bubbleRef = useRef<HTMLDivElement>(null);

    const size = {
        width: bubbleRef.current?.getBoundingClientRect().width,
        height: bubbleRef.current?.getBoundingClientRect().height,
    };


    return (
        <div
            ref={bubbleRef}
            style={{
                left:
                    direction === "tl" || direction === "bl"
                        ? coords.left - size.width!
                        : coords.left,
                top:
                    direction === "tl" || direction === "tr"
                        ? coords.top - size.height! - 3
                        : coords.top,
            }}
            className={"bubble-chat group"}
        >
            <div
                className={
                    "absolute" +
                    (direction === "tl"
                        ? "  w-4 -bottom-2 right-1 mirrorX"
                        : direction === "tr"
                        ? " w-4 -bottom-2"
                        : direction === "bl"
                        ? " w-4 -top-2 right-2 mirror"
                        : " w-4 -top-2 mirrorY ")
                }
            >
                <Image src={treangle} alt={"triangle"} />
            </div>
            <div className="relative z-50">{title}</div>
        </div>
    );
};

//  direction === "tl"
//      ? "bubble-chat-treangle-tl"
//      : direction === "tr"
//      ? "bubble-chat-treangle-tr"
//      : direction === "bl"
//      ? "bubble-chat-treangle-bl"
//      : "bubble-chat-treangle-br";
