import axios from "axios";

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

export const dispatcher = async <T>(
    url: string,
    { arg }: { arg: T }
): Promise<dataResponse> => {
    const { data } = await instance.post<dataResponse>(url, arg);

    return data;
};

// dispatcher('ddd', {dd:'dsada'})
