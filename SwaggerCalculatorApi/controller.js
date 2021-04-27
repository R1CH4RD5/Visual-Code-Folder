const express = require("express")
const router = express.Router()

// Index
exports.calculator = function (req, res) {
    const c = parseInt(req.params.a) + parseInt(req.params.b);
    //console.log(req.params.a , req.params.b , c)
    res.send(c.toString());
};