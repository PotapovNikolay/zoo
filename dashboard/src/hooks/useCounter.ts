import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface useCounterProps {
    count: number;
    trueSetCount: Function;
}

export function useCounter(): useCounterProps {
    const [count, setCount] = useState<number>(1);

    const increment = () => setCount((x) => x + 1);
    const decrement = () => setCount((x) => (x === 0 ? 0 : x - 1));

    const trueSetCount = (value: number) =>
        value === 1 ? increment() : decrement();

    return {
        count,
        trueSetCount,
    };
}
