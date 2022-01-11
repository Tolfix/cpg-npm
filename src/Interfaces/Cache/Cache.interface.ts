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
    get(): ICache;
    clear(): void;
}

export type ICFCache = NonFunctionProperties<ICache>;