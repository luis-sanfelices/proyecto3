const authController = {
    hello(req, res, next) {
        res.send("hello world auth");
    }
};

module.exports = authController;