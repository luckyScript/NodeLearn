class Layer {
    constructor(method, fn) {
        this.method = method;
        this.handle = fn;
    }
    handle_method(req) {
        return this.method.toLowerCase() === req.method.toLowerCase()
    }
    handle_request(req, res, next) {
        if (!this.handle_method(req)) return;
        const fn = this.handle;
        try {
            fn(req, res, next);
        } catch (err) {
            throw err;
        }
    }
}
module.exports = Layer;