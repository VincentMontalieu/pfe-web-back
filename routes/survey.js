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
  if (!req.body.visite || !req.body.accueil || !req.body.information || !req.body.preservation 
    || !req.body.reglementation || !req.body.frequentation) {
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