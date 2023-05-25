
interface Json {
    success: boolean;
    data: any[];
}

type Send<T = Response> = (body?: Json) => T;

export interface CustomResponse extends Express.Response {
    json: Send<this>;
}
