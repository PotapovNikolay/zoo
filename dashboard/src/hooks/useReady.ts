import { MutableRefObject, useEffect, useState } from "react";

export function useReady(item: MutableRefObject<SVGSVGElement | null>) {
    const [ready, setReady] = useState<boolean>(false);

    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        if (item.current) {
            setReady(true);
        }
    }, [item]);

    return { ready, width };
}