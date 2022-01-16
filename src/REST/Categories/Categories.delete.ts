import { ICategory } from "../../Interfaces/Categories/Categories.interface";
import Fetch from "../../Modules/Fetch";

export default function(id: ICategory["id"] | ICategory["uid"]): Promise<{}>
{
    if(!id)
        throw Promise.reject(`No id provided`);

    return Fetch({
        endpoint: `categories/${id}`,
        method: "DELETE",
    });
}