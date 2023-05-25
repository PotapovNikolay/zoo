import { ClassType } from "@types";
import { fetcher } from "@fetcher";
import useSWR from "swr";

interface getClassesProps {
    data: ClassType[];
    error: string;
    isLoading: boolean;
}

export function useClasses(): getClassesProps {
    const { data, error, isLoading } = useSWR("classes", fetcher);

    console.log(data, error, isLoading);

    return { data, error, isLoading };
}

interface getClassProps {
    data: ClassType;
    error: string;
    isLoading: boolean;
}

export function useClass(slug: string): getClassProps {
    const { data, error, isLoading } = useSWR(`classes/${slug}`, fetcher);

    console.log(data, error, isLoading);

    return { data, error, isLoading };
}
