import express = require("express")
const pingport = process.env.PING_LISTEN_PORT;
const app = express();
app.use((req : any, res : any, next : any) => {
    if (req.originalUrl != "/ping"){
        res.send('ERROR 404');
    }else{
        //Mettre le content type en header, échec mais avec extension json lite fonctionne pour edge et opera donc jsp
        /*res.writeHead(200, {
            'Content-Type' : 'application/json'
        });
        let headers = req.headers;
        let res1 = JSON.stringify(headers)
        res.end(headers)*/
        let headers = req.headers;
        res.json(headers)
    }
    
})
//Avant d'utiliser le app.use, même résultat
/*app.get('/', (req, res) => {
    res.send('ERROR 404');
})
app.get('/ping', function (req, res) {
    let headers = req.headers;
    res.json(headers)
});*/

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
//Pas réussi avec l'environnement
/*app.listen(pingport, () => {
    console.log('The application is listening on port 3000!');
})*/