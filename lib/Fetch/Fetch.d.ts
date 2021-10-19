export default function Fetch(path: string, body?: any): Promise<{
    status: "Success" | "Error";
    code: number;
    res: Object;
}>;
