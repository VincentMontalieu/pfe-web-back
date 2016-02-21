# pfe-web-back

Back-end du client web mobile pour le PFE "Fouille de données environnementales issues du site de Port Cros". Permet de récupérer les avis des visiteurs et de les stocker dans une base de données.

Ce serveur est developpé en **Node.js** avec le framework **Express.js**.

This project is generated with [express-generator](http://expressjs.com/starter/generator.html)
version 4.13.1.

## Architecture

### bin

Contains the script for creating and running the server based on the `app.js` file.

### business

Contains the scripts for interacting with the database.

### connector

Contains the script for connecting with the database.

### routes

Contains the scripts for routing.

## Running the server

There are three ways to run this server:

* Run `grunt serve` from the project directory. The advantage of this method is the live reload function.

* Run `npm start` from project directory.

* Run `node bin/www.js` from project directory.

## Running the server continuously

I recommend using [Forever](https://github.com/foreverjs/forever).

* Run `forever start bin/www.js` from project directory.
