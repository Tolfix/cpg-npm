import { IOrder } from "../../Interfaces/Orders.interface";
import Fetch from "../../Modules/Fetch";

export default function(id: IOrder["id"] | IOrder["uid"]): Promise<{}>
{
    if(!id)
        throw Promise.reject(`No id provided`);

    return Fetch({
        endpoint: `orders/${id}`,
        method: "DELETE",
    });
}