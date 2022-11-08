const method = require('express').Router();
const Method = require('../controllers/method');


method.post('/',Method.create);
method.get('/',Method.read);
method.patch('/:id',Method.update);
method.delete('/:id',Method.delete);



module.exports = method;