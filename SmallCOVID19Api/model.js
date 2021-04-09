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
// As mongoose pluralize the collection so we need to specify actual collection name
var Reg = module.exports = mongoose.model('datainfo', sch, 'datainfo');

module.exports.get = function (callback, limit) {
   Reg.find(callback).limit(limit);
}