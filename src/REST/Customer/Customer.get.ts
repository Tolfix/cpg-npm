import { ICustomer } from "../../Interfaces/Customer/Customer.interface";
import Fetch from "../../Modules/Fetch";

export default function<
    ID extends ICustomer["uid"] | ICustomer["id"] | undefined = undefined
>(
    id?: ID extends undefined ? undefined : ID
): ID extends undefined ? Promise<ICustomer[]> : Promise<ICustomer>
{
    if(!id)
        return Fetch({
            endpoint: "customers",
        });

    return Fetch({
        endpoint: `customers/${id}`,
    });
};