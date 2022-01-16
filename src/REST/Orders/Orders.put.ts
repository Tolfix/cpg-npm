import { IOrder } from "../../Interfaces/Orders.interface";
import Fetch from "../../Modules/Fetch";
import { IOrderOptions } from "./Orders.post";

export default function(id: IOrder["id"] | IOrder["uid"], options?: Partial<IOrderOptions>): Promise<IOrder>
{
    if(!id)
        throw Promise.reject(`No id provided`);

    return Fetch({
        endpoint: `invoices/${id}`,
        method: "PUT",
        body: options,
    });
}