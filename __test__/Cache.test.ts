import CPG from "../src/Index";
import CacheConfig from "../src/Cache/Config.cache";
CPG.config.set({
    admin: {
        password: "password for admin on cpg",
        username: "username for admin on cpg"
    },
    cpg: {
        // host for cpg, example: cpg.example.com
        host: "localhost:8080",
        // http or https
        protocol: "http"
    },
    // If you want to use rest api, set this to true
    isUsingRest: true,
    // If you want to use graphql instead, set to true
    isUsingGraphql: false,
    // Rest api version, default is v2
    rest: {
        version: "v2"
    },
});

console.log(CacheConfig.get("admin"));