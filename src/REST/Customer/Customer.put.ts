import { ICustomer } from "../../Interfaces/Customer.interface";
import Fetch from "../../Modules/Fetch";
import { ICustomerOptions } from "./Customer.post";

export default function(id: ICustomer["id"] | ICustomer["uid"], options?: Partial<ICustomerOptions>): Promise<ICustomer>
{
    if(!id)
        throw Promise.reject(`No id provided`);

    return Fetch({
        endpoint: `customers/${id}`,
        method: "PUT",
        body: options,
    });
}