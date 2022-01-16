import { ICategory } from "../../Interfaces/Categories.interface";
import Fetch from "../../Modules/Fetch";
import { ICategoriesOptions } from "./Categories.post";

export default function(id: ICategory["id"] | ICategory["uid"], options?: Partial<ICategoriesOptions>): Promise<ICategory>
{
    if(!id)
        throw Promise.reject(`No id provided`);

    return Fetch({
        endpoint: `categories/${id}`,
        method: "PUT",
        body: options,
    });
}