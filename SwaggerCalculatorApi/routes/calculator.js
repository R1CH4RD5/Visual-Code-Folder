const express = require("express")
const router = express.Router()

var Controller = require('../controller');

router.route('/:a/:b').get(Controller.calculator);


/*router.get("/:a/:b", (req, res) => {
    const c = parseInt(req.params.a) + parseInt(req.params.b);
    //console.log(req.params.a , req.params.b , c)
    res.send(c.toString());
})*/


/**
* @swagger
* components:
*   schemas:
*     Calculator:
*       type: object
*       required:
*         - a
*         - b
*       properties:
*         a:
*           type: number
*           description: 1st number
*         b:
*           type: number
*           description: 2nd number
*         example:
*           a: 1
*           b: 2
*/


/**
 * @swagger
 * /calculator/{a}/{b}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: a
 *         schema:
 *           type: number
 *         required: true
 *       - in: path
 *         name: b
 *         schema:
 *           type: number
 *         required: true
 *     responses:
 *       200:
 *         description: test
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/Calculator'
 *       404:
 *         description: nope
 *           
 */

module.exports = router;