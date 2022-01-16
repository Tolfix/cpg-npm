export interface IFetchOptions
{
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    headers: { [key: string]: string };
}