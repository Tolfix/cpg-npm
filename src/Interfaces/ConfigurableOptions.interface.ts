import { IProduct } from "./Products.interface";

export interface IConfigurableOptions
{
    id: number;
    uid: `CO_${string}`;
    name: string;
    products_ids: Array<IProduct["id"]>;
    options: Array<{
        name: string;
        price: number;
    }>;
}