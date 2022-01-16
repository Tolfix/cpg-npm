import { ICategory } from "../../Interfaces/Categories/Categories.interface";
import Fetch from "../../Modules/Fetch";

export type ICategoriesOptions = Omit<ICategory, "id" | "uid">;

export default function(options: ICategoriesOptions): Promise<ICategory>
{
    return Fetch({
        endpoint: "categories",
        method: "POST",
        body: options,
    });
}