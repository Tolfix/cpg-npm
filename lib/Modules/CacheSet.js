"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CacheConfigs_1 = require("../Cache/CacheConfigs");
function Config(config) {
    if (!config.host)
        throw Error("Missing host in config.");
    if (!config.proto)
        config.proto = "http";
    if (!config.admin_username)
        throw Error("Missing admin username.");
    if (!config.admin_password)
        throw Error("Missing admin password.");
    CacheConfigs_1.CacheConfig.set("host", config.host);
    CacheConfigs_1.CacheConfig.set("proto", config.proto);
    CacheConfigs_1.CacheConfig.set("admin_username", config.admin_username);
    CacheConfigs_1.CacheConfig.set("admin_password", config.admin_password);
}
exports.default = Config;
