# pfe-web-back

Back-end du client web mobile pour le PFE *Fouille de données environnementales issues du site de Port Cros*. Permet de récupérer les avis des visiteurs et de les stocker dans une base de données **MySQL**.

Ce serveur est developpé en **Node.js** avec le framework **Express.js**.

Ce projet est généré avec [express-generator](http://expressjs.com/starter/generator.html)
version 4.13.1.

## Architecture

### bin

Contient le script permettant de créer et de lancer le serveur à partir du fichier `app.js`.

### business

Contient les scripts permettant d'interagir avec la base de données.

### connector

Contient le script permettant de se connecter à la base de données.

### routes

Contient les scripts pour le routing.

## Lancer le serveur

Il y a trois façons de lancer le serveur :

* Lancer `grunt serve` depuis le répertoire du projet. L'avantage de cette méthode est la fonction de *live reload*.

* Lancer `npm start` depuis le répertoire du projet.

* Lancer `node bin/www.js` depuis le répertoire du projet.

## Lancer le serveur en continu

Je recommande l'utilisation de [Forever](https://github.com/foreverjs/forever).

* Lancer `forever start bin/www.js` depuis le répertoire du projet.

## Base de données

La base de données doit être organisée comme suit :

* Nom : `pfe`

* Une seule table : `survey`

* Colonnes : `id` `date` `proprete` `tranquilite` `services` `beaute` `raison`
