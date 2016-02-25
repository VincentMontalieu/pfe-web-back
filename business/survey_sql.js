// Requirements
var mysql = require('../connector/mysql');

/**
* Add a survey to the MySQL DB
*/
function sendTheSurvey(body, callback) {
  survey = {
    visite: 5 - body.visite, // Pour passer à l'échelle 1-4 : Très satisfait, satisfait, peu satisfait, pas satisfait (on inverse quoi)
    accueil: 5 - body.accueil, // Pour passer à l'échelle 1-4 : Très satisfait, satisfait, peu satisfait, pas satisfait (on inverse quoi)
    information: 5 - body.information, // Pour passer à l'échelle 1-4 : Très satisfait, satisfait, peu satisfait, pas satisfait (on inverse quoi)
    preservation: 5 - body.preservation, // Pour passer à l'échelle 1-4 : Très satisfait, satisfait, peu satisfait, pas satisfait (on inverse quoi)
    reglementation: 5 - body.reglementation, // Pour passer à l'échelle 1-4 : Très satisfait, satisfait, peu satisfait, pas satisfait (on inverse quoi)
    frequentation: body.frequentation
  };

  // CAS VISITEUR PIETON OU CYCLISTE
  if(body.categorie == 'Piéton / Cycliste') {
    mysql.query('INSERT into pieton (id, date, visite, accueil, info, preservation, reglementation, frequentation) VALUES (NULL, CURRENT_TIMESTAMP, ?, ?, ?, ?, ?, ?)',
    [survey.visite, survey.accueil, survey.information, survey.preservation, survey.reglementation, survey.frequentation],
  
    function (error, results, fields) {
      if(results) {
        console.log(results);
        callback({status:'success', data: 'Merci pour votre temps.'});
      }
      else {
        console.log(error);
        callback({status:'error', data: "La base de données a rencontré une erreur :("});
      }
    });
  }

  // CAS VISITEUR PLAISANCIER
  else if(body.categorie == 'Plaisancier') {
    mysql.query('INSERT into nautique (id, date, visite, accueil, info, preservation, reglementation, frequentation) VALUES (NULL, CURRENT_TIMESTAMP, ?, ?, ?, ?, ?, ?)',
    [survey.visite, survey.accueil, survey.information, survey.preservation, survey.reglementation, survey.frequentation],
  
    function (error, results, fields) {
      if(results) {
        console.log(results);
        callback({status:'success', data: 'Merci pour votre temps.'});
      }
      else {
        console.log(error);
        callback({status:'error', data: "La base de données a rencontré une erreur :("});
      }
    });
  }

  // CAS AUTRE EN THEORIE IMPOSSIBLE MAIS BON ON SAIT JAMAIS
  else {
    console.log("Enorme probleme c'est la fin du monde")
    callback({status:'error', data: "La catégorie de visiteur ne correspond à rien. Bravo, vous avez hacké le système."});
  }   
}

module.exports = {
  sendSurvey: sendTheSurvey
};