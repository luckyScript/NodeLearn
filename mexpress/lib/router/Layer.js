const pathRegexp = require('path-to-regexp');
class Layer {
    constructor(path, method, fn) {
        this.path = path;
        this.method = method;
        this.handle = fn;
        this.regexp = pathRegexp(path, this.keys = [])
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
    match(path) {
        if (path) {
            if (path === '/' || path === '*') {
                return true
            } else {
                return Boolean(this.regexp.exec(path));
            }
        } else {
            return false;
        }
    }
}
module.exports = Layer;