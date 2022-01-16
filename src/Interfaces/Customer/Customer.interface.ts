export interface ICustomer
{
    id: number;
    uid: `CUS_${string}`;
    personal: IPersonal;
    billing: IBilling;
    password: string;
    createdAt: Date;
    extra?: any;
}

export interface IPersonal
{
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
}

export interface IBilling
{
    company?: string;
    company_vat?: string;
    street01: string;
    street02?: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
}