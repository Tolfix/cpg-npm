import ConfigCache from "../../Cache/Config.cache";
import { ICache, ICFCache } from "../../Interfaces/Cache/Cache.interface";
import { FunctionProperties } from "../../Interfaces/General.interface";

export default <FunctionProperties<ICache>>{
    set(options: Partial<ICFCache>): void
    {
        for(let key of Object.keys(options))
        {
            // @ts-ignore
            ConfigCache.set(key, options[key]);
        }
    },
    clear(): void
    {
        ConfigCache.clear();
    },
    get(key: keyof ICFCache): ICFCache | undefined
    {
        return ConfigCache.get(key);
    }
}