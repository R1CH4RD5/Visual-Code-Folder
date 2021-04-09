// Import Model
let Reg = require('./model');

// Index
exports.index = function (req, res) {
    Reg.get(function (err, reg) {
        if (err)
            res.json({status: "error", message: err});
        res.json({
            status: "Online",
            message: "List Successfully Obtained:",
            data: reg       
        });
    });
};

// NewCasesList
exports.newcaseslist = function (req, res) {
    Reg.get(function (err, reg) {
        if (err)res.json({status: "error",message: err});
        var newcases = []
        for(var i in reg)
        {
            newcases.push(reg[i].confirmados_novos)
        }
        res.json({
            status: "OK",
            message: "New Cases List:",
            data: newcases
        });
    });
};

// NewICUCasesList
exports.newicucaseslist = function (req, res) {
    Reg.get(function (err, reg) {
        if (err)res.json({status: "error",message: err});
        var newicucases = []
        for(var i in reg)
        {
            newicucases.push(reg[i].internados_uci)
        }
        res.json({
            status: "OK",
            message: "New ICU Cases List:",
            data: newicucases
        });
    });
};

// MaxNewCases
exports.maxnewcases = function (req, res) {
    Reg.get(function (err, reg) {
        if (err)res.json({status: "error",message: err});
        var mnewcases = []
        var dates = []
        for(var i in reg)
        {
            mnewcases.push(reg[i].confirmados_novos)
            dates.push(reg[i].data)
        }
        var f = mnewcases.indexOf(Math.max.apply(null, mnewcases))
        res.json({
            status: "OK",
            message: "Day and number with the maximum new cases:",
            data: dates[f] + "  " + Math.max.apply(null, mnewcases)
        });
    });
};

// FewerNewCases
exports.fewernewcases = function (req, res) {
    Reg.get(function (err, reg) {
        if (err)res.json({status: "error",message: err});
        var fnewcases = []
        var dates = []
        for(var i in reg)
        {
            fnewcases.push(reg[i].confirmados_novos)
            dates.push(reg[i].data)
        }
        var f = fnewcases.indexOf(Math.min.apply(null, fnewcases))
        res.json({
            status: "OK",
            message: "Day and number with the fewer new cases:",
            data: dates[f] + "  " + Math.min.apply(null, fnewcases)
        });
    });
};

// Average7Days
exports.avg7 = function (req, res) {

    Reg.get(function (err, reg) {
        if (err)res.json({status: "error",message: err});
        var cases = []
        for(var i in reg)
        {
            cases.push(reg[i].confirmados_novos)
        }
        res.json({
            status: "OK",
            message: "Average of new cases in 7 days:",
            data: (Object.values(cases).reduce((a, b) => a + b))/7
        });
    });
};

// AllNewCases
exports.allnewcases = function (req, res) {
    Reg.get(function (err, reg) {
        if (err)res.json({status: "error",message: err});
        var newcases = []
        for(var i in reg)
        {
            newcases.push(reg[i].confirmados_novos)
        }
        res.json({
            status: "OK",
            message: "All New Cases:",
            data: (Object.values(newcases).reduce((a, b) => a + b))
        });
    });
};

// Project
exports.project = function (req, res) {
    Reg.get(function (err, reg) {
        if (err)res.json({status: "error",message: err});

        var ncases = []
        var dates = []
        var icucases = []
        for(var i in reg)
        {
            ncases.push(reg[i].confirmados_novos)
            dates.push(reg[i].data)
            icucases.push(reg[i].internados_uci)
        }
        var m = ncases.indexOf(Math.max.apply(null, ncases))
        var f = ncases.indexOf(Math.min.apply(null, ncases))
        res.json({
            "Project": "SmallCOVID19API",
            "by": "Ricardo Costa (R1CH4RD5)",
            "List number of new cases (for all days of the week)": ncases.join(", "),
            "List number of intensive care admissions (for all days of the week)": icucases.join(", "),
            "Day with more new cases": "Day " + dates[m] + " with " + Math.max.apply(null, ncases) + " new cases.",
            "Day with fewer cases": "Day " + dates[f] + " with " + Math.min.apply(null, ncases) + " new cases.",
            "Average 7 days": Math.trunc((Object.values(ncases).reduce((a, b) => a + b))/7) + " new cases",
            "Total number of new cases in the week": (Object.values(ncases).reduce((a, b) => a + b)) + " new cases"
        });
    });
};