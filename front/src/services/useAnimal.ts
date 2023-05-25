import { fetcher, axios } from "../utils/fetcher";
import useSWR from "swr";

export  function useAnimals() {
    const { data:animals , error, isLoading }  = useSWR("/animals", fetcher);

    return {animals, isLoading}
}
