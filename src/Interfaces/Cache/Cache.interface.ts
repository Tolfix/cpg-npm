import { NonFunctionProperties } from "../General.interface";

export interface ICache
{
    admin: {
        password: string;
        username: string;
    };

    token: string;

    rest: {
        version: string;
    };

    graphql: {
        path: string;
    };

    cpg: {
        host: string;
        protocol: "http" | "https";
    }

    isAdmin: boolean;
    isUsingRest: boolean;
    isUsingGraphql: boolean;

    set(options: Partial<ICache>): void;
    get<K extends keyof ICFCache>(key: K): ICache[K];
    clear(): void;
}

export type ICFCache = NonFunctionProperties<ICache>;