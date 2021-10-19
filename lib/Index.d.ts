import Config from "./Modules/CacheSet";
export declare const CPG: {
    SetConfig: typeof Config;
    customer: {
        create: (customer: import("./Modules/Customers").ICustomer) => Promise<{
            status: "Success" | "Error";
            code: number;
            res: Object;
        }>;
        get: (uid?: `CUS_${string}` | undefined) => Promise<{
            status: "Success" | "Error";
            code: number;
            res: Object;
        }>;
    };
};
