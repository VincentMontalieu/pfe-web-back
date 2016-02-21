/**
 * @author Vincent Montalieu
 * @brief Routes for survey.
 */

/**
 * Requirements
 */
var express = require('express');
var router = express.Router();

var json_to_send_back = {
	status: "success",
	value: "Merci pour votre temps. A bientôt !"
};

/**
 * SEND
 */
router.post('/send', function (req, res, next) {
    console.log('Front-end is calling');
    console.log(req.body);
    res.send(json_to_send_back);
});

module.exports = router;