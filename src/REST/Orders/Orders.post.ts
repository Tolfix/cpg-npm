import { IOrder } from "../../Interfaces/Orders.interface";
import Fetch from "../../Modules/Fetch";

export type IOrderOptions = Omit<IOrder, "id" | "uid">;

export default function(options: IOrderOptions): Promise<IOrder>
{
    return Fetch({
        endpoint: "invoices",
        method: "POST",
        body: options,
    });
}