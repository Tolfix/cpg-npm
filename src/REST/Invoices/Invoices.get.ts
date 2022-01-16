import { IInvoice } from "../../Interfaces/Invoice.interface";
import Fetch from "../../Modules/Fetch";

export default function<
    ID extends IInvoice["uid"] | IInvoice["id"] | undefined = undefined
>(
    id?: ID extends undefined ? undefined : ID
): ID extends undefined ? Promise<IInvoice[]> : Promise<IInvoice>
{
    if(!id)
        return Fetch({
            endpoint: "invoices",
        });

    return Fetch({
        endpoint: `invoices/${id}`,
    });
};