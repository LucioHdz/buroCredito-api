const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;


module.exports.createServer = function(){
    app.listen(PORT,()=>console.log('localhost:3001'));
    app.use(express.json());
    app.use(cors());
    return app
}