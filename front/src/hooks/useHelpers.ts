interface useHelpersProps {
    useWordFormat: Function;
}

export function useHelpers(): useHelpersProps {
    function useWordFormat(count: number): string {
        if (count === 1) return "человека";
        else if (count > 4) return "человек";
        else return "людей";
    }

    return {
        useWordFormat,
    };
}
