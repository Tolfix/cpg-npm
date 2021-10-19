import { ICustomer } from "../cpg/src/Interfaces/Customer";
import Fetch from "../Fetch/Fetch";

interface ICreateCustomer extends Omit<ICustomer, "uid"> {};

async function CreateCustomer(customer: ICreateCustomer)
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