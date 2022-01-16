import { ICategory } from "../../Interfaces/Categories/Categories.interface";
import Fetch from "../../Modules/Fetch";

export default function<
    ID extends ICategory["uid"] | ICategory["id"] | undefined = undefined
>(
    id?: ID extends undefined ? undefined : ID
): ID extends undefined ? Promise<ICategory[]> : Promise<ICategory>
{
    if(!id)
        return Fetch({
            endpoint: "categories",
        });

    return Fetch({
        endpoint: `categories/${id}`,
    });
};