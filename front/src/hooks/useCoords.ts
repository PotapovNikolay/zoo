import { RefObject } from "react";

export interface coordsType {
    top: number;
    left: number;
    child?: Element;
    parent?: DOMRect;
}

export function useCoords(
    ref: RefObject<SVGSVGElement>,
    index: number
): coordsType {
    if (ref.current) {
        const child = ref.current.childNodes[index] as Element;
        const parent = ref.current.parentElement as Element;

        if (parent && child) {
            const parentPos = parent.getBoundingClientRect();
            const childPos = child.getBoundingClientRect();

            return {
                parent: parentPos,
                child: child,
                top: Math.round(childPos.top - parentPos.top - 1),
                left: Math.round(childPos.left - parentPos.left - 1),
            };
        } else {
            return {
                top: 0,
                left: 0,
            };
        }
    } else {
        return {
            top: 0,
            left: 0,
        };
    }
}
