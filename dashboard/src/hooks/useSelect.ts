import { useState } from "react";

export function useSelect() {
    const [items, setitems] = useState<Array<string>>([]);

    const select = (item: string) => {
        
        if (items.includes(item)) {
            setitems((items) => items.slice(0, items.indexOf(item)));
        } else {
            setitems((items) => [...items, item]);
        }
        console.log(items);
    };



    return { select, selected: items };
}
