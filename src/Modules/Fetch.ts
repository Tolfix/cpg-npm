import CacheModules from "./Cache/Cache.modules";
// @ts-ignore
import fetch from "node-fetch";
import { IFetchOptions } from "../Interfaces/Fetch.interface";

export default async function Fetch({
    endpoint,
    method = "GET",
    body = null,
    headers = {},
}: Partial<IFetchOptions>): Promise<any>
{
    const config = CacheModules.get("cpg");
    let token = CacheModules.get("token");
    const [isRest, isGraphQL] = [CacheModules.get("isUsingRest"), CacheModules.get("isUsingGraphql")];
    const [restConfig, graphqlConfig] = [CacheModules.get("rest"), CacheModules.get("graphql")];
    const admin = CacheModules.get("admin");
    
    if(!config.host)
        throw new Error(`No host specified in config.`);

    if(!config.protocol)
        throw new Error(`No protocol specified in config.`);
    
    // Check if any token
    if(!token)
    {
        // Assuming user has not logged in yet, getting token then caching it
        const { username, password } = admin;
        if(!username || !password)
            throw new Error(`No username or password specified in config.`);

        const response = await fetch(`${config.protocol}://${config.host}/v1/admin/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${Buffer.from(`${username}:${password}`)}`
            },
        });
        const data = await response.json() as {
            text: string,
            expires: string,
            token: string,
        } | undefined;

        console.log(data);

        if(!data)
            return Promise.reject("No data returned from server.");

        CacheModules.set({
            token: data.token
        });

        return Fetch({
            endpoint,
            method,
            body,
            headers
        });
    }

    if(isRest)
        return Promise.resolve(await (await fetch(`${config.protocol}://${config.host}/${restConfig.version}/${endpoint}`, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                ...headers,
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }, 
        })).json());

    // if(isGraphQL)
    //     return;

    return Promise.resolve(await (await fetch(`${config.protocol}://${config.host}/${restConfig.version}/${endpoint}`, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            ...headers,
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }, 
    })).json());
}