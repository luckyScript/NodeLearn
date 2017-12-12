const http = require('http');
const methods = require('methods');
const Route = require('./router/index');

module.exports = function createServer() {
    const app = function (req, res) {
        app.handle(req, res);
    }
    Object.assign(app, proto);
    app.init();
    return app;
}

const proto = Object.create(null);

proto.handle = function (req, res) {
    this.route.dispatch(...arguments);
}

proto.init = function () {
    this.route = new Route();
}

proto.listen = function (port) {
    const server = http.createServer(this)
    return server.listen(...arguments)
}

methods.forEach(function (method) {
    proto[method] = function (fn) {
        this.route[method](...arguments);
    }
})