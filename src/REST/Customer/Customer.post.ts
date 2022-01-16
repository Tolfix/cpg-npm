import { ICustomer } from "../../Interfaces/Customer.interface";
import Fetch from "../../Modules/Fetch";

export type ICustomerOptions = Omit<ICustomer, "id" | "uid">;

export default function(options: ICustomerOptions): Promise<ICustomer>
{
    return Fetch({
        endpoint: "customers",
        method: "POST",
        body: options,
    });
}