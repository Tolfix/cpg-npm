import { ICategory } from "../../Interfaces/Categories/Categories.interface";
import { ICustomer } from "../../Interfaces/Customer/Customer.interface";
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