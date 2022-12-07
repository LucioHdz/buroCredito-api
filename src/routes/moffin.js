const moffin = require('express').Router();
const Moffin = require('../controllers/moffin');


moffin.post('/:id',Moffin.create);
moffin.get('/:id',Moffin.read);



module.exports = moffin;