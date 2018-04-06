const controller = {
    hello(req, res, next) {
        res.send("hello world");
    }
};

module.exports = controller;