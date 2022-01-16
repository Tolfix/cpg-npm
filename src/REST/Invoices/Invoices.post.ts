import { IInvoice } from "../../Interfaces/Invoice.interface";
import Fetch from "../../Modules/Fetch";

export type IInvoiceOptions = Omit<IInvoice, "id" | "uid">;

export default function(options: IInvoiceOptions): Promise<IInvoice>
{
    return Fetch({
        endpoint: "invoices",
        method: "POST",
        body: options,
    });
}