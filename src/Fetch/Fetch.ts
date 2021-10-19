import fetch from "node-fetch";
import { CacheConfig } from "../Cache/CacheConfigs";

export default async function Fetch(path: string, body?: any): Promise<{
    status: "Success" | "Error";
    code: number;
    res: Object;
}>
{
    const h = CacheConfig.get("host");
    const p = CacheConfig.get("proto");
    const aP = CacheConfig.get("admin_password");
    const aU = CacheConfig.get("admin_username");
    return ((await fetch(`${p}://${h}/${path}`, {
        headers: {
            Authorization: `Basic ${Buffer.from(`${aU}:${aP}`).toString("base64")}`
        },
        body: body
    })).json()) as unknown as {
        status: "Success" | "Error";
        code: number;
        res: Object;
    }
}