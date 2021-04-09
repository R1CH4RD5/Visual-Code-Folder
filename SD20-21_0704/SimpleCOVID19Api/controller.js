// Import Model
let Reg = require('./model');

// Index
exports.index = function (req, res) {
    Reg.get(function (err, reg) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            //status: "OK",
            message: "List Successfully Obtained:",
            data: reg       
        });
    });
};

// Sum
exports.sum = function (req, res) {

    Reg.get(function (err, reg) {
        if (err)res.json({
                status: "error",
                message: err
            });

            var casos = []
            for(var i in reg)
            {
                casos.push(reg[i].confirmados_novos)
            }

        res.json({
            //status: "OK",
            message: "Sum of 'confirmados_novos':",
            //data: casos.length    
            data: (Object.values(casos).reduce((a, b) => a + b))
        });
    });
};

// SumICU
exports.sumicu = function (req, res) {

    Reg.get(function (err, reg) {
        if (err)res.json({
                status: "error",
                message: err
            });

            var casos = []
            for(var i in reg)
            {
                casos.push(reg[i].internados_uci)
            }

        res.json({
            //status: "OK",
            message: "Sum in the ICU of 'confirmados_novos':",
            //data: casos.length    
            DataAvgValue_internados_uci: (Object.values(casos).reduce((a, b) => a + b))
        });
    });
};

// Maximum
exports.max = function (req, res) {

    Reg.get(function (err, reg) {
        if (err)res.json({
                status: "error",
                message: err
            });

            var casos = []
            for(var i in reg)
            {
                casos.push(reg[i].confirmados_novos)
            }

        res.json({
            //status: "OK",
            message: "Maximum of 'confirmados_novos':",
            data: Math.max.apply(null, casos)      
        });
    });
};

// Maximum Date
exports.maxdate = function (req, res) {

    Reg.get(function (err, reg) {
        if (err)res.json({
                status: "error",
                message: err
            });

            var casos = []
            var dates = []
            for(var i in reg)
            {
                //casos.push(reg[i].data, reg[i].confirmados_novos)
                casos.push(reg[i].confirmados_novos)
                dates.push(reg[i].data)
            }
            //var d = Math.max.apply(null, casos)
            var f = casos.indexOf(Math.max.apply(null, casos))

        res.json({
            //status: "OK",
            message: "Date and Value of Maximum 'confirmados_novos':",            
            //DataMaxValue_Confirmados_Novos: Math.max.apply(null, casos)

            data: dates[f] + "  " + Math.max.apply(null, casos)

        });
    });
};


// Minimum
exports.min = function (req, res) {

    Reg.get(function (err, reg) {
        if (err)res.json({
                status: "error",
                message: err
            });

            var casos = []
            for(var i in reg)
            {
                casos.push(reg[i].confirmados_novos)
            }

        res.json({
            //status: "OK",
            //message: "Minimum confirmados_novos.",
            DataMinValue_Confirmados_Novos : Math.min.apply(null, casos)      
        });
    });
};

// Average
exports.avg = function (req, res) {

    Reg.get(function (err, reg) {
        if (err)res.json({
                status: "error",
                message: err
            });

            var casos = []
            for(var i in reg)
            {
                casos.push(reg[i].confirmados_novos)
            }

        res.json({
            //status: "OK",
            message: "Minimum confimados_novos.",
            //data: casos.length    
            data: (Object.values(casos).reduce((a, b) => a + b))/(casos.length)
        });
    });
};

// --------

// Total
/*exports.max = function (req, res) {
    Reg.findOne({}, function (err, reg) {
        if (err)
            res.send(err);
        res.json({
            message: 'Registration Details.',
            data: reg
        });
    });
};*/

// Total
/*exports.max = function (req, res) {
    Reg.find({}, function (err, reg) {
        if (err)
            res.send(err);
        res.json({
            message: 'Registration Details.',
            data: reg
        });
    });
};*/

// New Registration
/*exports.add = function (req, res) {
    var reg = new Reg();
    
    reg.registo = req.body.registo;
    reg.data = req.body.data;
    reg.confirmados_novos = req.body.confirmados_novos;
    reg.internados_uci = req.body.internados_uci;

    // Save and check for erros
    reg.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Registration added.",
            data: reg
        });
    });
};*/

/*Reg.findOne({confirmados_novos : 1 }).sort(last_mod, 1).run( function(err, reg) {
    if (err)
        res.send(err);
    res.json({
        message: 'Registration Details.',
        data: reg.last_mod
});*/