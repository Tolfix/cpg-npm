<p align="center">
  <a href="https://tolfix.com/" target="_blank"><img width="260" src="https://cdn.tolfix.com/images/TX-Small.png"></a>
  <br/>
  <strong>C</strong>entral <strong>P</strong>ayment <strong>G</strong>ateway npm
</p>

# ⭐ | cpg-npm
cpg-npm is being used to intereact with [CPG-API](https://github.com/Tolfix/cpg-api).

# 📝| Examples

## Caching Configs
```ts
import CPG from "cpg-npm";

// Set config, then you are ready to use cpg
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
```

# 📢 | Contribute
Want to contribute? Great! You can contribute by `forking` this repository, then make changes and make a `PR`!

Or simple ask on our [`discord server`](https://discord.tolfix.com).

# 🔮 | Discord
[![Discord](https://discord.com/api/guilds/833438897484595230/widget.png?style=banner4)](https://discord.tolfix.com)

# ⚙ | Tolfix
**Tolfix** is a `company` focusing about `IT`, `Development` and `Networking`, we drive to help others with their `problems` when it comes to `IT` and love contributing to others.
Want to find more information about us you can visit us at [`https://tolfix.com/`](https://tolfix.com/).