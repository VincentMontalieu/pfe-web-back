// Requirements
var express = require('express');
var router = express.Router();
var surveyManager = require('../business/survey_sql');

/**
* Route for adding a survey
*/
router.post('/send', sendSurvey);

/**
* Add a survey
*/
function sendSurvey (req, res) {
  console.log("ADD SURVEY");
  console.log(req.body);

  // Requete incomplete
  if (!req.body.proprete || !req.body.tranquilite || !req.body.services || !req.body.beaute || !req.body.venue) {
  	res.json({status: 'error', data: "Formulaire incomplet."});
  }

  // C'est bon on peut envoyer
  else {
  	surveyManager.sendSurvey(req.body, function (result) {
  		res.send(result);
  	});
  }
}

module.exports = router;