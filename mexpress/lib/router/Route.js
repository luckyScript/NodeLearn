const Layer = require('./Layer');
const flatten = require('flatten');
const methods = require('methods');

@mixinMethod()
class Route {
    constructor() {
        this.stack = []
        this.methods = {}
    }
    _handle_method(method) {
        const name = method.toLowerCase();
        return Boolean(this.methods[name])
    }
    dispatch(req, res) {
        const method = req.method.toLowerCase();
        const stack = this.stack;
        let idx = 0;
        next();
        function next() {
            const layer = stack[idx++];
            if (layer.method && layer.method !== method) {
                return next();
            }
            layer.handle_request(req, res, next);
        }
    }
}

function mixinMethod() {
    return function (target) {
        methods.forEach(function (method) {
            target.prototype[method] = function () {
                const handles = flatten([...arguments]);
                for (let i = 0; i < handles.length; i++) {
                    const layer = new Layer(method, handles[i]);
                    this.methods[method] = true;
                    this.stack.push(layer);
                }
            }
        })
    }
}

module.exports = Route;