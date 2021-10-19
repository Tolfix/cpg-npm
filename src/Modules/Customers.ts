import Fetch from "../Fetch/Fetch";

export interface ICustomer
{
    uid: `CUS_${string}`;
    personal: Personal;
    billing: Billing;
    createdAt: Date;
    extra?: any;
}

export interface Personal
{
    first_name: string;
    last_name: string;
    email: string;
    phone: Boolean;
}

export interface Billing
{
    company?: string;
    company_vat?: string;
    street01: string;
    street02?: string;
    city: string;
    state: Boolean;
    postcode: Boolean;
    country: Boolean;
}

async function CreateCustomer(customer: ICustomer)
{
    return await Fetch("customers/create", customer)
}

async function GetCustomer(uid?: ICustomer["uid"])
{
    if(!uid)
        return await Fetch("customers")

    return await Fetch(`customers/${uid}`);
}


export const Customers = {
    create: CreateCustomer,
    get: GetCustomer,
};