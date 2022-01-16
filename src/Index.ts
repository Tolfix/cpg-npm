import CacheModules from "./Modules/Cache/Cache.modules";
import CategoriesDelete from "./REST/Categories/Categories.delete";
import CategoriesGet from "./REST/Categories/Categories.get";
import CategoriesPost from "./REST/Categories/Categories.post";
import CategoriesPut from "./REST/Categories/Categories.put";
import CustomerDelete from "./REST/Customer/Customer.delete";
import CustomerGet from "./REST/Customer/Customer.get";
import CustomerPost from "./REST/Customer/Customer.post";
import CustomerPut from "./REST/Customer/Customer.put";

const CPG_NPM = {
    config: {...CacheModules},
    categories: {
        get: CategoriesGet,
        post: CategoriesPost,
        delete: CategoriesDelete,
        put: CategoriesPut
    },
    customers: {
        get: CustomerGet,
        post: CustomerPost,
        delete: CustomerDelete,
        put: CustomerPut,
    }
}

export = CPG_NPM;