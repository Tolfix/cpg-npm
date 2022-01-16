import CPG from "../src/Index";

CPG.config.set({
    admin: {
        password: "123",
        username: "123"
    },
    cpg: {
        host: "localhost:8080",
        protocol: "http"
    },
    isUsingRest: true,
    rest: {
        version: "v2"
    },
});

CPG.categories.get().then(console.log);
CPG.categories.get(8).then(console.log);

CPG.categories.post({
    description: "test",
    name: "test",
    private: false
}).then(console.log)