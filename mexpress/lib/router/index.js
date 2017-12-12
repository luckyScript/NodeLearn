const Route = require('./Route');
const Layer = require('./Layer');
const methods = require('methods');
const parseUrl = require('parseUrl');

const proto = module.exports = function (options) {
    function router (req, res, next) {
        router.handle(req, res, next);
    }
    return router;
};