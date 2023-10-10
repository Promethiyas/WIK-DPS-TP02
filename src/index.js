"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var pingport = process.env.PING_LISTEN_PORT;
var app = express();
app.use(function (req, res, next) {
    if (req.originalUrl != "/ping") {
        res.send('ERROR 404');
    }
    else {
        //Mettre le content type en header, échec mais avec extension json lite fonctionne pour edge et opera donc jsp
        /*res.writeHead(200, {
            'Content-Type' : 'application/json'
        });
        let headers = req.headers;
        let res1 = JSON.stringify(headers)
        res.end(headers)*/
        var headers = req.headers;
        res.json(headers);
    }
});
//Avant d'utiliser le app.use, même résultat
/*app.get('/', (req, res) => {
    res.send('ERROR 404');
})
app.get('/ping', function (req, res) {
    let headers = req.headers;
    res.json(headers)
});*/
app.listen(3000, function () {
    console.log('The application is listening on port 3000!');
});
//Pas réussi avec l'environnement
/*app.listen(pingport, () => {
    console.log('The application is listening on port 3000!');
})*/ 
