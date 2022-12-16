const path = require('path');
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

module.exports.createServer = function () {
    app.listen(PORT, () => console.log("localhost:3001"));
    //  MIDDLEWARES
    //  express-json()
    //    funciona para poder interpretar los archivos json recibidos
    //  cors ({options})
    //    define que IPS pueden conectarse al servidor, agregando una capa de seguridad al servidor.
    app.use(express.json());
    app.use(cors());

    const publicPath = path.join(__dirname, '..','..', 'public');
    app.use(express.static(publicPath));

    return app;
};
