// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'Online',
        message: 'Welcome to SimpleCOVID19API'
    });
});

// Import UserReg Controller
var Controller = require('./controller');

// Routes
router.route('/index')
    .get(Controller.index);

router.route('/index/sum')
    .get(Controller.sum);
    
router.route('/index/sumicu')
    .get(Controller.sumicu);

router.route('/index/max')
    .get(Controller.max);
    
router.route('/index/maxdate')
    .get(Controller.maxdate);

router.route('/index/min')
    .get(Controller.min);

router.route('/index/avg')
    .get(Controller.avg);

// Export API routes
module.exports = router;