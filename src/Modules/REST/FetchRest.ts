import CacheModules from "../Cache/Cache.modules";
import fetch from "node-fetch"

async function RestFetch()
{
    const config = CacheModules.get("cpg");
    let token = CacheModules.get("token");
    const [isRest, isGraphQL] = [CacheModules.get("isUsingRest"), CacheModules.get("isUsingGraphql")];
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
                "Authorization": `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`
            },
        });
        const data = await response.json() as {
            text: string,
            expires: string,
            token: string,
        } | undefined;

        if(!data)
            throw new Error(`No data received from server.`);

        CacheModules.set({
            token: data.token
        });

        token = data.token;
    }

    
}