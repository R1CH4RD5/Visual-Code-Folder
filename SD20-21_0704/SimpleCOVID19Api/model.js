var mongoose = require('mongoose');

// Schema
var sch = mongoose.Schema({
    registo: {
        type: Number,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    confirmados_novos: {
        type: Number,
        required: true
    },
    internados_uci: {
        type: Number,
        required: true
    }
});

// Export Model
var Reg = module.exports = mongoose.model('data29to03', sch);

module.exports.get = function (callback, limit) {
   Reg.find(callback).limit(limit);
}