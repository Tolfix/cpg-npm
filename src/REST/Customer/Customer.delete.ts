import { ICustomer } from "../../Interfaces/Customer.interface";
import Fetch from "../../Modules/Fetch";

export default function(id: ICustomer["id"] | ICustomer["uid"]): Promise<{}>
{
    if(!id)
        throw Promise.reject(`No id provided`);

    return Fetch({
        endpoint: `customers/${id}`,
        method: "DELETE",
    });
}