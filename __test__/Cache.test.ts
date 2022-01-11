import CPG from "../src/Index";
import CacheConfig from "../src/Cache/Config.cache";

CPG.config.set({
    admin: {
        password: "123",
        username: "admin"
    }
});

console.log(CacheConfig.get("admin"));