// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'Online',
        message: 'Welcome to SmallCOVID19API by R1CH4RD5.'
    });
});

// Import UserReg Controller
var Controller = require('./controller');

// Routes
router.route('/index')
    .get(Controller.index);

router.route('/index/newcaseslist')
    .get(Controller.newcaseslist);

router.route('/index/newicucaseslist')
    .get(Controller.newicucaseslist);

router.route('/index/maxnewcases')
    .get(Controller.maxnewcases);

router.route('/index/fewernewcases')
    .get(Controller.fewernewcases);

router.route('/index/avg7')
    .get(Controller.avg7);

router.route('/index/allnewcases')
    .get(Controller.allnewcases);

router.route('/project')
    .get(Controller.project);

// Export API routes
module.exports = router;