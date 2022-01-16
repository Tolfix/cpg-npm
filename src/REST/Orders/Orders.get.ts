import { IOrder } from "../../Interfaces/Orders.interface";
import Fetch from "../../Modules/Fetch";

export default function<
    ID extends IOrder["uid"] | IOrder["id"] | undefined = undefined
>(
    id?: ID extends undefined ? undefined : ID
): ID extends undefined ? Promise<IOrder[]> : Promise<IOrder>
{
    if(!id)
        return Fetch({
            endpoint: "orders",
        });

    return Fetch({
        endpoint: `orders/${id}`,
    });
};