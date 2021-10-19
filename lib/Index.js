"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPG = void 0;
const CacheSet_1 = __importDefault(require("./Modules/CacheSet"));
const Customers_1 = require("./Modules/Customers");
exports.CPG = {
    SetConfig: CacheSet_1.default,
    customer: Customers_1.Customers
};
