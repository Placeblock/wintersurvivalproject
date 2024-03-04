var express = require("express");
var app = express();
const https = require('https');
const fs = require('fs');
path = require('path');

app.use("/", express.static(path.join(__dirname, './client')))
app.use("/howto/", express.static(path.join(__dirname, './howto')))

var privateKey = fs.readFileSync( '/etc/letsencrypt/live/placeblock.undo.it/privkey.pem' );
var certificate = fs.readFileSync( '/etc/letsencrypt/live/placeblock.undo.it/cert.pem' );
const server = https.createServer({
    key: privateKey,
    cert: certificate
}, app);
server.listen(8000);