import { CacheConfig } from "../Cache/CacheConfigs";
import { IConfig } from "../Interfaces/Configs";

export default function Config(config: IConfig)
{
    if(!config.host)
        throw Error(`Missing host in config.`);

    if(!config.proto)
        config.proto = "http";

    if(!config.admin_username)
        throw Error(`Missing admin username.`);

    if(!config.admin_password)
        throw Error(`Missing admin password.`);

    CacheConfig.set("host", config.host);
    CacheConfig.set("proto", config.proto);
    CacheConfig.set("admin_username", config.admin_username);
    CacheConfig.set("admin_password", config.admin_password);
}