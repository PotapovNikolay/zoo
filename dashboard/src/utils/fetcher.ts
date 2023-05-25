import axios from "axios";
import { type } from "os";

const baseURL = "http://localhost:3001";

const instance = axios.create({
    baseURL: baseURL,
});

export { baseURL };

export { instance as axios };

export const fetcher = async (url: string) => {
    return await instance.get(url).then((res) => res.data);
};

interface dataResponse {
    message: string;
    success: boolean;
}

type TMethod = "post" | "patch" | 'put' | "delete";

export const dispatcher = async <T>(
    url: string,
    { arg }: { arg: { entity: T; method: TMethod } }
): Promise<dataResponse> => {
    const { data } = await instance<dataResponse>({
        method: arg.method,
        url: url,
        data: { entity: arg.entity },
    });

    return data;
};

// dispatcher('ddd', {dd:'dsada'})
