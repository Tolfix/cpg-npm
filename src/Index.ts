import CacheModules from "./Modules/Cache/Cache.modules";
import CategoriesDelete from "./REST/Categories/Categories.delete";
import CategoriesGet from "./REST/Categories/Categories.get";
import CategoriesPost from "./REST/Categories/Categories.post";
import CategoriesPut from "./REST/Categories/Categories.put";
import CustomerDelete from "./REST/Customer/Customer.delete";
import CustomerGet from "./REST/Customer/Customer.get";
import CustomerPost from "./REST/Customer/Customer.post";
import CustomerPut from "./REST/Customer/Customer.put";
import InvoicesDelete from "./REST/Invoices/Invoices.delete";
import InvoicesGet from "./REST/Invoices/Invoices.get";
import InvoicesPost from "./REST/Invoices/Invoices.post";
import InvoicesPut from "./REST/Invoices/Invoices.put";
import OrdersDelete from "./REST/Orders/Orders.delete";
import OrdersGet from "./REST/Orders/Orders.get";
import OrdersPost from "./REST/Orders/Orders.post";
import OrdersPut from "./REST/Orders/Orders.put";

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
    },
    invoices: {
        get: InvoicesGet,
        post: InvoicesPost,
        delete: InvoicesDelete,
        put: InvoicesPut,
    },
    orders: {
        get: OrdersGet,
        post: OrdersPost,
        delete: OrdersDelete,
        put: OrdersPut,
    }
}

export = CPG_NPM;