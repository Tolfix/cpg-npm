import CacheModules from "./Modules/Cache/Cache.modules";
import CategoriesDelete from "./REST/Categories/Categories.delete";
import CategoriesGet from "./REST/Categories/Categories.get";
import CategoriesPost from "./REST/Categories/Categories.post";
import CategoriesPut from "./REST/Categories/Categories.put";

const CPG_NPM = {
    config: {...CacheModules},
    categories: {
        get: CategoriesGet,
        post: CategoriesPost,
        delete: CategoriesDelete,
        put: CategoriesPut
    }
}

export = CPG_NPM;