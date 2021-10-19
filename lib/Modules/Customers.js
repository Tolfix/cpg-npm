"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
const Fetch_1 = __importDefault(require("../Fetch/Fetch"));
function CreateCustomer(customer) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Fetch_1.default("customers/create", customer);
    });
}
function GetCustomer(uid) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!uid)
            return yield Fetch_1.default("customers");
        return yield Fetch_1.default(`customers/${uid}`);
    });
}
exports.Customers = {
    create: CreateCustomer,
    get: GetCustomer,
};
