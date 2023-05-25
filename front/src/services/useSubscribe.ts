import useSWRMutation from "swr/mutation";
import { dispatcher } from "@fetcher";


export function useSubscribe(email: string): any {
    const { trigger, data, error } = useSWRMutation("/subscribe", dispatcher);
    return { trigger, data, error };
}
