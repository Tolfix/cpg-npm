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
const node_fetch_1 = __importDefault(require("node-fetch"));
const CacheConfigs_1 = require("../Cache/CacheConfigs");
function Fetch(path, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const h = CacheConfigs_1.CacheConfig.get("host");
        const p = CacheConfigs_1.CacheConfig.get("proto");
        const aP = CacheConfigs_1.CacheConfig.get("admin_password");
        const aU = CacheConfigs_1.CacheConfig.get("admin_username");
        return ((yield node_fetch_1.default(`${p}://${h}/${path}`, {
            headers: {
                Authorization: `Basic ${Buffer.from(`${aU}:${aP}`).toString("base64")}`
            },
            body: body
        })).json());
    });
}
exports.default = Fetch;
