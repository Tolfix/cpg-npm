import { IInvoice } from "../../Interfaces/Invoice.interface";
import Fetch from "../../Modules/Fetch";
import { IInvoiceOptions } from "./Invoices.post";

export default function(id: IInvoice["id"] | IInvoice["uid"], options?: Partial<IInvoiceOptions>): Promise<IInvoice>
{
    if(!id)
        throw Promise.reject(`No id provided`);

    return Fetch({
        endpoint: `invoices/${id}`,
        method: "PUT",
        body: options,
    });
}