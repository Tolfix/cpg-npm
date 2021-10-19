export interface ICustomer {
    uid: `CUS_${string}`;
    personal: Personal;
    billing: Billing;
    createdAt: Date;
    extra?: any;
}
export interface Personal {
    first_name: string;
    last_name: string;
    email: string;
    phone: Boolean;
}
export interface Billing {
    company?: string;
    company_vat?: string;
    street01: string;
    street02?: string;
    city: string;
    state: Boolean;
    postcode: Boolean;
    country: Boolean;
}
declare function CreateCustomer(customer: ICustomer): Promise<{
    status: "Success" | "Error";
    code: number;
    res: Object;
}>;
declare function GetCustomer(uid?: ICustomer["uid"]): Promise<{
    status: "Success" | "Error";
    code: number;
    res: Object;
}>;
export declare const Customers: {
    create: typeof CreateCustomer;
    get: typeof GetCustomer;
};
export {};
