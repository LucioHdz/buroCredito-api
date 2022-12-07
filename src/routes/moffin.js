const moffin = require('express').Router();
const Moffin = require('../controllers/moffin');


moffin.post('/:id',Moffin.create);
moffin.get('/',Moffin.read);



module.exports = moffin;