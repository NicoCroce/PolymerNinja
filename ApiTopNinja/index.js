'use strict';
// CORS Express middleware to enable CORS Requests.
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
app.use(cors());
app.options('*', cors());

app.set('port', (process.env.PORT || 1122));

app.listen(app.get('port'), function () {
  console.log('API listening on port ' + app.get('port'));
});

app.get('/', (req, res) => {
  res.status(200).send('TOP NINJAS');
});

app.get('/list-top', (req, res) => {
  let listBoard = {
    "leaderBoard": [
      {
        "email": "pablo.inchausti@bbva.com",
        "level": "black",
        "points": 32187,
        "name": "Pablo Ezequiel Inchausti",
        "country": "ARG",
        "position": 1
      },
      {
        "email": "d.carbone@bbva.com",
        "level": "black",
        "points": 28130,
        "name": "Diego Carbone",
        "country": "ARG",
        "position": 2
      },
      {
        "email": "guillermogerman.speicher@bbva.com",
        "level": "black",
        "points": 25449,
        "name": "Guillermo German Speicher",
        "country": "ARG",
        "position": 3
      },
      {
        "email": "carlos.pantelides@bbva.com",
        "level": "black",
        "points": 25204,
        "name": "PelucaKiller",
        "country": "ARG",
        "position": 4
      },
      {
        "email": "gustavodaniel.rodriguez@bbva.com",
        "level": "brown",
        "points": 21261,
        "name": "Gustavo D. Rodriguez",
        "country": "ARG",
        "position": 5
      },
      {
        "email": "diegoalfonso.oderigo@bbva.com",
        "level": "brown",
        "points": 21137,
        "name": "Diego Alfonso Oderigo",
        "country": "ARG",
        "position": 6
      },
      {
        "email": "hector.aguado.next@bbva.com",
        "level": "brown",
        "points": 17856,
        "name": "Hector Aguado",
        "country": "HLD",
        "position": 7
      },
      {
        "email": "nicolas.croce@bbva.com",
        "level": "brown",
        "points": 17325,
        "name": "Nicolas Croce",
        "country": "ARG",
        "position": 8
      },
      {
        "email": "sergio.contreras.martin@bbva.com",
        "level": "brown",
        "points": 15330,
        "name": "Sergio Contreras Martin",
        "country": "HLD",
        "position": 9
      },
      {
        "email": "juanp.garcia@bbva.com",
        "level": "brown",
        "points": 15065,
        "name": "Sarabadu",
        "country": "ARG",
        "position": 10
      },
      {
        "email": "roberto.huergo@bbva.com",
        "level": "brown",
        "points": 13570,
        "name": "Roberto Huergo",
        "country": "ESP",
        "position": 11
      },
      {
        "email": "r.rodriguez@bbva.com",
        "level": "brown",
        "points": 13340,
        "name": "Richi",
        "country": "HLD",
        "position": 12
      },
      {
        "email": "nahuel.alvarez@bbva.com",
        "level": "brown",
        "points": 11603,
        "name": "Nahuel Alvarez",
        "country": "ARG",
        "position": 13
      },
      {
        "email": "diego.herrera.next@bbva.com",
        "level": "brown",
        "points": 10530,
        "name": "Diego Herrera",
        "country": "HLD",
        "position": 14
      },
      {
        "email": "angel.gonzalez.mendez.next@bbva.com",
        "level": "blue",
        "points": 42577,
        "name": "Angel Gonzalez Mendez",
        "country": "MEX",
        "position": 15
      },
      {
        "email": "socrates.ruiz.santiago@bbva.com",
        "level": "blue",
        "points": 35795,
        "name": "Valar Dohaeris (つ▀¯▀)つ",
        "country": "MEX",
        "position": 16
      },
      {
        "email": "victor.espiritu@bbva.com",
        "level": "blue",
        "points": 27245,
        "name": "Victor Espiritu",
        "country": "PER",
        "position": 17
      },
      {
        "email": "ivan.fernandez.perea.next@bbva.com",
        "level": "blue",
        "points": 23205,
        "name": "Ivan Fernandez Perea",
        "country": "HLD",
        "position": 18
      },
      {
        "email": "epomayay@bbva.com",
        "level": "blue",
        "points": 22755,
        "name": "Edwin Pomayay",
        "country": "PER",
        "position": 19
      },
      {
        "email": "nestor.silva@bbva.com",
        "level": "blue",
        "points": 21620,
        "name": "Nestor Silva V",
        "country": "COL",
        "position": 20
      },
      {
        "email": "santiago.arellano@bbva.com",
        "level": "blue",
        "points": 21463,
        "name": "Santiago Arellano Cruz",
        "country": "MEX",
        "position": 21
      },
      {
        "email": "william.marchan@bbva.com",
        "level": "blue",
        "points": 21230,
        "name": "William Marchan",
        "country": "PER",
        "position": 22
      },
      {
        "email": "jorge.posada@bbva.com",
        "level": "blue",
        "points": 20225,
        "name": "Jorge Posada",
        "country": "PER",
        "position": 23
      },
      {
        "email": "luis.espindola@bbva.com",
        "level": "blue",
        "points": 19427,
        "name": "Luis Espindola",
        "country": "COL",
        "position": 24
      },
      {
        "email": "luis.dzib@bbva.com",
        "level": "blue",
        "points": 18000,
        "name": "Luis Dzib",
        "country": "MEX",
        "position": 25
      },
      {
        "email": "joseramon.baltza.next@bbva.com",
        "level": "blue",
        "points": 16757,
        "name": "Jose Ramon Baltza",
        "country": "HLD",
        "position": 26
      },
      {
        "email": "anthony.mogrovejo@bbva.com",
        "level": "blue",
        "points": 16500,
        "name": "kdetony",
        "country": "PER",
        "position": 27
      },
      {
        "email": "alanmark.sousa.next@bbva.com",
        "level": "blue",
        "points": 15716,
        "name": "Alan Mark Sousa Posincovich",
        "country": "HLD",
        "position": 28
      },
      {
        "email": "dennis.risco@bbva.com",
        "level": "blue",
        "points": 15431,
        "name": "Dennis Risco Marquez",
        "country": "PER",
        "position": 29
      },
      {
        "email": "marioarturo.rivera.bonilla.next@bbva.com",
        "level": "blue",
        "points": 15310,
        "name": "Mario Arturo Rivera Bonilla",
        "country": "MEX",
        "position": 30
      }
    ],
    "lastUpdate": "2018-11-14T04:59:34.216Z"
  }

  res.status(200).send(listBoard);
});