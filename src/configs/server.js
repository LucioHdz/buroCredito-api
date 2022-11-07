const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;


module.exports.createServer = function(){
    app.listen(PORT,()=>console.log('ok'));
    app.use(express.json());
    app.use(cors());
    return app
}