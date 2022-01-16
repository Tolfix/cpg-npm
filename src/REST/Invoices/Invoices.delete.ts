import { IInvoice } from "../../Interfaces/Invoice.interface";
import Fetch from "../../Modules/Fetch";

export default function(id: IInvoice["id"] | IInvoice["uid"]): Promise<{}>
{
    if(!id)
        throw Promise.reject(`No id provided`);

    return Fetch({
        endpoint: `invoices/${id}`,
        method: "DELETE",
    });
}