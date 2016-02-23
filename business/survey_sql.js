// Requirements
var mysql = require('../connector/mysql');

/**
* Add a survey to the MySQL DB
*/
function sendTheSurvey(body, callback) {
  var proprete = body.proprete;
  var tranquilite = body.tranquilite;
  var services = body.services;
  var beaute = body.beaute;
  var raison = body.venue;

  mysql.query('INSERT into survey (id, date, proprete, tranquilite, services, beaute, raison) VALUES (NULL, CURRENT_TIMESTAMP, ?, ?, ?, ?, ?)',
    [proprete, tranquilite, services, beaute, raison],
    
    function (error, results, fields) {
      if(results) {
        console.log(results);
        callback({status:'success', data: 'Merci pour votre temps.'});
      }
      else {
        console.log(error);
        callback({status:'error', data: "Votre avis n'a pas été ajouté..."});
      }
    });            
}

module.exports = {
  sendSurvey: sendTheSurvey
};