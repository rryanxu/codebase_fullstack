let proxy = new Proxy({}, {
    get: function (target, propKey) {
        return 35;
    }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35

console.log(proxy.time)
